import React from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  // Displays the content of the Header.js, Sections.js and Projects.js files.
  return (
    <div className="container">
      <Header />
      <main>
        <Sections />
        <Projects /> 
      </main>
    </div>
  );
}

export default App;
