import React from "react";
import "./Skills.scss";
const Skills = () => {
  return (
    <div className="skills">
      <p className="skills__lang">Languages</p>
      <aside className="skills__langs">
        <p> &gt; HTML</p>
        <p>&gt; CSS</p>
        <p>&gt; JAVASCRIPT</p>
      </aside>
      <aside className="">
        <p className="skills__lang">Technologies</p>
        <div className="skills__langs">
          <p>&gt; REACT</p>
          <p>&gt; REDUX</p>
          <p>&gt; TAILWIND CSS</p>
          <p>&gt; SASS</p>
          <p>&gt; TYPESCRIPT</p>
        </div>
      </aside>
    </div>
  );
};

export default Skills;
