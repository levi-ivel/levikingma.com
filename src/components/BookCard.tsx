import { ImageWithLoader } from "./ImageWithLoader";
import "../styles/components/BookCard.css";

export type BookCardProps = {
    title: string;
    author: string;
    image: string;
    alt: string;
    onCopy: (author: string, title: string) => Promise<void> | void;
};

export function BookCard({ title, author, image, alt, onCopy }: BookCardProps) {
    return (
        <button
            type="button"
            className="book-card"
            onClick={() => onCopy(author, title)}
            aria-label={`Copy ${author} - ${title}`}
        >
            <div className="book-cover">
                <ImageWithLoader
                    src={`/assets/library/${image}`}
                    alt={alt}
                    decoding="async"
                />
            </div>
            <div className="book-info">
                <h2 className="book-title">{title}</h2>
                <span className="book-author">{author}</span>
            </div>
        </button>
    );
}
