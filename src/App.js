import React from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Projects from "./components/Projects";
import "./App.css";

function App() {
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
