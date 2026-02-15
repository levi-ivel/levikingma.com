import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookCard, type BookCardProps } from "../components/BookCard";
import "../styles/pages/LibraryPage.css";
import { useToast } from "../hooks/useToast";

const BOOKS: Omit<BookCardProps, "onCopy">[] = [
  {
    title: "Emptiness Dancing",
    author: "Adyashanti",
    image: "emptiness.webp",
    alt: "Emptiness Dancing cover",
  },
  {
    title: "The Signal and the Noise",
    author: "Nate Silver",
    image: "signal.webp",
    alt: "The Signal and the Noise cover",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    image: "hitchhikers.webp",
    alt: "The Hitchhiker's Guide to the Galaxy cover",
  },
  {
    title: "The Innovators",
    author: "Walter Isaacson",
    image: "innovators.webp",
    alt: "The Innovators cover",
  },
  // {
  //   title: "Thinking, Fast and Slow",
  //   author: "Daniel Kahneman",
  //   image: "thinking.webp",
  //   alt: "Thinking, Fast and Slow cover",
  // },
];

export function LibraryPage() {
  const { visible: toastVisible, showToast } = useToast();

  // Copy author and title to clipboard
  const copyBook = async (author: string, title: string) => {
    try {
      await navigator.clipboard.writeText(`${author} - ${title}`);
      showToast();
    } catch {
    }
  };

  return (
    <>
      <Helmet>
        <title>Library - Levi Kingma</title>
        <meta
          name="description"
          content="A collection of books I enjoyed reading."
        />
      </Helmet>
      <nav className="top-nav">
        <Link to="/" className="nav-link">
          home
        </Link>
      </nav>

      <main className="blog-container">
        <h1 className="blog-title">Library</h1>
        <h2 className="library-subtitle">Books I enjoyed reading, click a book to copy its details</h2>
        <div className="library-grid">
          {BOOKS.map((book) => (
            <BookCard key={book.title} {...book} onCopy={copyBook} />
          ))}
        </div>
      </main>

      <div className={`toast${toastVisible ? " show" : ""}`}>Copied to clipboard</div>
    </>
  );
}

