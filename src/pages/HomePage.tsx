import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/pages/HomePage.css";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Levi Kingma - Software Development</title>
        <meta
          name="description"
          content="Levi Kingma - Backend & System design guy. Software engineer based in Friesland, Netherlands."
        />
      </Helmet>
      <nav className="top-nav">
        <Link to="/posts" className="nav-link">
          posts
        </Link>
        <Link to="/library" className="nav-link">
          books
        </Link>
      </nav>

      <header>
        <div className="intro">
          <p>
            Levi Kingma
            <br />
            📍Friesland, Netherlands📍
            <br />I like backend and system development
            <br />
            And I use{" "}
            <a href="https://github.com/levi-ivel/dotfiles" target="_blank" rel="noreferrer">
              Arch
            </a>
            , btw
          </p>
        </div>

        <div className="name">
          <pre className="ascii-art">{String.raw`     ___       ___           ___                 
    /\__\     /\  \         /\__\          ___   
   /:/  /    /::\  \       /:/  /         /\  \  
  /:/  /    /:/\:\  \     /:/  /          \:\  \ 
 /:/  /    /::\~\:\  \   /:/__/  ___      /::\__\
/:/__/    /:/\:\ \:\__\  |:|  | /\__\  __/:/\/__/
\:\  \    \:\~\:\ \/__/  |:|  |/:/  / /\/:/  /   
 \:\  \    \:\ \:\__\    |:|__/:/  /  \::/__/    
  \:\  \    \:\ \/__/     \::::/__/    \:\__\    
   \:\__\    \:\__\        ~~~~         \/__/    
    \/__/     \/__/                              
`}</pre>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/levi-ivel"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <i className="fab fa-github fa-2x spring-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/levi-kingma-36a317293/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <i className="fab fa-linkedin fa-2x spring-icon"></i>
          </a>
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            Download Resume
          </a>
          <a href="mailto:zakelijk@levikingma.com" className="social-btn">
            <i className="fas fa-envelope fa-2x spring-icon"></i>
          </a>
          <a
            href="https://www.instagram.com/levi.kingma/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            <i className="fab fa-instagram fa-2x spring-icon"></i>
          </a>
        </div>
      </header>
    </>
  );
}
