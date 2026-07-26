import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PostCard, type PostCardProps } from "../components/PostCard";
import "../styles/pages/PostsPage.css";

const POSTS: PostCardProps[] = [
  {
    href: "/posts/the-2025-advent-of-code-showdown",
    title: "The 2025 Advent of Code Showdown:\n12 Days, 12 Languages",
    coverKind: "tree",
  },
  {
    href: "/posts/towards-perfect-note-taking",
    title: "Towards Perfect Note Taking",
    coverKind: "wheat",
  }
];

export function PostsPage() {
  return (
    <>
      <Helmet>
        <title>Posts - Levi Kingma</title>
        <meta
          name="description"
          content="A collection of blog posts about software development and system design."
        />
      </Helmet>
      <nav className="top-nav">
        <Link to="/" className="nav-link">
          home
        </Link>
      </nav>

      <main className="blog-container">
        <h1 className="blog-title">Posts</h1>
        <div className="posts-list">
          {[...POSTS].reverse().map((post) => (
            <PostCard
              key={post.href}
              href={post.href}
              coverKind={post.coverKind}
              title={post.title}
            />
          ))}
        </div>
      </main>
    </>
  );
}
