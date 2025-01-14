import React from "react";
import "./Sections.css";

function Sections() {
  return (
    <section className="directions">

    {/* Displays my skills */}
      <div className="box">
        <h2>My Skills</h2>
        <div className="section-box">
          <div className="section-list">{"Frontend { HTML, CSS, JavaScript }"}</div>
          <div className="section-list">{"Backend { PHP, MySQL }"}</div>
          <div className="section-list">{"App { Flutter }"}</div>
          <div className="section-list">{"General Purpose { C#, Python }"}</div>
        </div>
      </div>

    {/* Displays my tools */}
      <div className="box" id="effect">
        <h2>My Tools</h2>
        <div className="section-box">
          <div className="section-list">{"IDE { VSCode, IntelliJ IDEA, Android Studio }"}</div>
          <div className="section-list">{"Version Control { Git, GitHub }"}</div>
          <div className="section-list">{"Engine { Unity }"}</div>
        </div>
      </div>

    </section>
  );
}

export default Sections;
