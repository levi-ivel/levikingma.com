import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="blog-container">
      <Helmet>
        <title>Not Found - Levi Kingma</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="blog-title">404</h1>
      <p>
        Unknown page. <Link to="/">Go home</Link>.
      </p>
    </main>
  );
}

