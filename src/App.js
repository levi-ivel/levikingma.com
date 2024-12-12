import React from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Projects from "./components/Projects"; // Import the new component
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Sections />
        <Projects /> {/* Add Projects below Sections */}
      </main>
    </div>
  );
}

export default App;
