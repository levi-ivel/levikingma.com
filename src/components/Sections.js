import React from "react";

function Sections() {
  return (
    <section className="directions">
        <div className="box">
          <h2>My Skills</h2>
          <div className="section-box">
            <div className="section-list">{"Frontend { HTML, CSS, JavaScript }"}</div>
            <div className="section-list">{"Backend { PHP, MySQL }"}</div>
            <div className="section-list">{"App { Flutter }"}</div>
            <div className="section-list">{"General Purpose { C#, Python }"}</div>
          </div>
        </div>

        <div className="box" id="effect">
          <h2>My Tools</h2>
          <div className="section-box">
            <div className="section-list">{"IDE { VSCode, IntelliJ IDEA, Android Studio }"}</div>
            <div className="section-list">{"Version Control { GitHub }"}</div>
            <div className="section-list">{"Engine { Unity }"}</div>
          </div>
        </div>
    </section>
  );
}

export default Sections;
