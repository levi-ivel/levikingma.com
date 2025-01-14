import React from "react";
import "./Footer.css";

function Footer() {
  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to get the current year for the trademark
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
      <p className="trademark">© {getCurrentYear()} Levi Kingma</p>

      <hr className="footer-line"/>

      <button onClick={scrollToTop}>
        <div class="text">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <div class="clone">
          <span>Back</span>
          <span>to</span>
          <span>top</span>
        </div>
        <svg
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>

    </footer>
  );
}

export default Footer;
