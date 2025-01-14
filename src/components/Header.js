import React from "react";
import "./Header.css";


function Header() {
  // Function to smoothly scroll to the given element ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={scrollToTop} className="nav-item">Home</li>
          <li onClick={() => scrollToSection("tools-skills")} className="nav-item">Tools & Skills</li>
          <li onClick={() => scrollToSection("projects")} className="nav-item">Projects</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
