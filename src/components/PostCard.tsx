import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import treeArt from "../assets/tree.txt?raw";
import wheatArt from "../assets/wheat.txt?raw";
import "../styles/components/PostCard.css";
import { useAnimatedArrow } from "../hooks/useAnimatedArrow";

const COVER_ART = {
    tree: treeArt,
    wheat: wheatArt,
};

export type PostCardProps = {
    href: string;
    coverKind: "tree" | "wheat";
    title: string;
};

export function PostCard({ href, coverKind, title }: PostCardProps) {
    const { arrow, onMouseEnter: animateArrowIn, onMouseLeave: animateArrowOut } = useAnimatedArrow();
    const [wheatStage, setWheatStage] = useState(0);
    const wheatStageRef = useRef(0);
    const wheatIntervalRef = useRef<number | null>(null);
    const coverArt = COVER_ART[coverKind];
    const wheatAnimation = createWheatAnimation(coverArt);
    let ornamentIndex = 0;
    let grainIndex = 0;

    useEffect(() => () => {
        if (wheatIntervalRef.current !== null) {
            clearInterval(wheatIntervalRef.current);
        }
    }, []);

    function animateWheat(target: number) {
        if (coverKind !== "wheat" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            return;
        }

        if (wheatIntervalRef.current !== null) {
            clearInterval(wheatIntervalRef.current);
        }

        wheatIntervalRef.current = window.setInterval(() => {
            const current = wheatStageRef.current;

            if (current === target) {
                if (wheatIntervalRef.current !== null) {
                    clearInterval(wheatIntervalRef.current);
                    wheatIntervalRef.current = null;
                }
                return;
            }

            const next = current < target ? current + 1 : current - 1;
            wheatStageRef.current = next;
            setWheatStage(next);

            if (next === target && wheatIntervalRef.current !== null) {
                clearInterval(wheatIntervalRef.current);
                wheatIntervalRef.current = null;
            }
        }, target === 0 ? 35 : 55);
    }

    function handleMouseEnter() {
        animateArrowIn();
        animateWheat(wheatAnimation.totalStages);
    }

    function handleMouseLeave() {
        animateArrowOut();
        animateWheat(0);
    }

    return (
        <Link to={href} className="post-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="post-cover">
                <pre
                    className={`post-cover-art post-cover-art-${coverKind}`}
                    aria-hidden="true"
                >
                    {coverKind === "tree" ? coverArt.split(/([*o])/).map((part, partIndex) => {
                        if (part === "*") {
                            return <span className="ascii-star" data-character={part} style={{ "--light-delay": "550ms" } as CSSProperties} key={partIndex}>{part}</span>;
                        }

                        if (part === "o") {
                            const ornament = ornamentIndex++;
                            return <span className={`ascii-ornament ascii-ornament-${ornament % 3}`} data-character={part} style={{ "--light-delay": `${[440, 330, 220, 220, 110, 0][ornament]}ms` } as CSSProperties} key={partIndex}>{part}</span>;
                        }

                        return part;
                    }) : wheatAnimation.lines.map((line, rowIndex) => (
                        <span className="ascii-wheat-row" key={rowIndex}>{Array.from(line).map((character, index) => {
                            const hiddenStage = wheatAnimation.stages[rowIndex][index];
                            const hiddenClass = hiddenStage > 0 && wheatStage >= hiddenStage ? " ascii-wheat-character-hidden" : "";

                            if (character === "v") {
                                return <span className={`ascii-wheat-grain ascii-wheat-grain-${grainIndex++ % 2}${hiddenClass}`} key={index}>{character}</span>;
                            }

                            if (character === "_") {
                                return <span className="ascii-wheat-soil" key={index}>{character}</span>;
                            }

                            if (character === "\\" || character === "/" || character === "|") {
                                return <span className={`ascii-wheat-stem${hiddenClass}`} key={index}>{character}</span>;
                            }

                            return character;
                        })}</span>
                    ))}
                </pre>
            </div>
            <div className="post-content">
                <h2 className="post-title">{title}</h2>
                <span className="post-arrow">{arrow}</span>
            </div>
        </Link>
    );
}

function createWheatAnimation(art: string) {
    const lines = art.split("\n");
    const stages = lines.map((line) => Array.from(line, () => 0));
    let totalStages = 0;

    lines.slice(0, -1).forEach((line, rowIndex) => {
        const characters = Array.from(line);
        const groups = [
            characters.flatMap((character, index) => character === "v" ? [index] : []),
            characters.flatMap((character, index) => character === "\\" || character === "/" ? [index] : []),
            characters.flatMap((character, index) => character === "|" ? [index] : []),
        ];

        groups.forEach((group) => {
            [2, 9, 6].forEach((stalk) => {
                const stalkGroup = group.filter((index) => {
                    const closestStalk = [2, 9, 6].reduce((closest, candidate) =>
                        Math.abs(candidate - index) < Math.abs(closest - index) ? candidate : closest
                    );
                    return closestStalk === stalk;
                });

                if (stalkGroup.length === 0) {
                    return;
                }

                totalStages++;
                stalkGroup.forEach((index) => {
                    stages[rowIndex][index] = totalStages;
                });
            });
        });
    });

    return { lines, stages, totalStages };
}
