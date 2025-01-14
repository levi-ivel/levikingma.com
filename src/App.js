import React from "react";
import Header from "./components/Header"
import Intro from "./components/Intro";
import Sections from "./components/Sections";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  // Displays the content of the Header.js, Sections.js and Projects.js files.
  return (
    <div className="container">
      <Header />

      <main>
        <Intro />
        <Sections />
        <Projects /> 
      </main>

      <Footer />
    </div>
  );
}

export default App;


