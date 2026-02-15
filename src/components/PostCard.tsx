import { Link } from "react-router-dom";
import { ImageWithLoader } from "./ImageWithLoader";
import "../styles/components/PostCard.css";
import { useAnimatedArrow } from "../hooks/useAnimatedArrow";

export type PostCardProps = {
    href: string;
    coverSrc: string;
    coverAlt: string;
    title: string;
};

export function PostCard({ href, coverSrc, coverAlt, title }: PostCardProps) {
    const { arrow, onMouseEnter, onMouseLeave } = useAnimatedArrow();

    return (
        <Link to={href} className="post-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="post-cover">
                <ImageWithLoader
                    src={coverSrc}
                    alt={coverAlt}
                    decoding="async"
                />
            </div>
            <div className="post-content">
                <h2 className="post-title">{title}</h2>
                <span className="post-arrow">{arrow}</span>
            </div>
        </Link>
    );
}
