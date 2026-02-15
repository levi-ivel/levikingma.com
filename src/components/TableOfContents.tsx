import { useEffect, useState, useRef } from "react";
import "../styles/components/TableOfContents.css";

interface TOCItem {
    id: string;
    text: string;
}

// Create an interactable table of contents based on the H1/H2 tags in the blog post
export function TableOfContents() {
    const [headings, setHeadings] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");
    const isScrollingManually = useRef(false);
    const scrollTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const article = document.querySelector(".post-article");
        if (!article) return;

        const headingElements = Array.from(article.querySelectorAll("h1, h2"));

        const items: TOCItem[] = headingElements.map((el) => {
            if (!el.id) {
                el.id = el.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") || "";
            }
            return {
                id: el.id,
                text: el.textContent || "",
            };
        });

        setHeadings(items);

        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrollingManually.current) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-10% 0px -80% 0px" }
        );

        const handleScroll = () => {
            if (isScrollingManually.current) return;

            const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
            if (isBottom && items.length > 0) {
                setActiveId(items[items.length - 1].id);
            }
        };

        headingElements.forEach((el) => observer.observe(el));
        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    if (headings.length === 0) return null;

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            isScrollingManually.current = true;
            setActiveId(id);

            if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);

            const topOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - topOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            scrollTimeoutRef.current = window.setTimeout(() => {
                isScrollingManually.current = false;
            }, 1000);
        }
    };

    return (
        <aside className="toc-sidebar">
            <nav className="toc-container">
                <div className="toc-title">Table Of Contents</div>
                <ul className="toc-list">
                    {headings.map((heading) => (
                        <li key={heading.id} className="toc-item">
                            <a
                                href={`#${heading.id}`}
                                className={`toc-link ${activeId === heading.id ? "active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToHeading(heading.id);
                                    window.history.pushState(null, "", `#${heading.id}`);
                                }}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
