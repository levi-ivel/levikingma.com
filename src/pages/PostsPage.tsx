import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PostCard, type PostCardProps } from "../components/PostCard";
import "../styles/pages/PostsPage.css";

const POSTS: PostCardProps[] = [
  {
    href: "/posts/AoC2025",
    title: "The 2025 Advent of Code Showdown:\n12 Days, 12 Languages",
    coverSrc: "/assets/posts/tree.webp",
    coverAlt: "AoC 2025 cover",
  },
  // {
  //   href: "/posts/AlgorithmicBotany",
  //   title: "Algorithmic Botany and what it \nmeans to call programming an art",
  //   coverSrc: "/assets/posts/tree.webp",
  //   coverAlt: "Algorithmic Botany cover",
  // },
  // {
  //   href: "/posts/WeatherForecasting",
  //   title: "ECMWF IFS, BlueFire, and my newfound \nrespect for weather forecasts",
  //   coverSrc: "/assets/posts/tree.webp",
  //   coverAlt: "Weather Forecasting cover",
  // },
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
          {POSTS.map((post) => (
            <PostCard
              key={post.href}
              href={post.href}
              coverSrc={post.coverSrc}
              coverAlt={post.coverAlt}
              title={post.title}
            />
          ))}
        </div>
      </main>
    </>
  );
}

