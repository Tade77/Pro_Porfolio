import React from "react";
import Article from "../../Atoms/Article";
import Skills from "../Skill/Skills";
import "./AboutMe.scss";

const AboutMe = () => {
  const aboutMe = `I'm a front-end developer, typically a problem-solver with passion for creating and making things work behind the scene. I have a broad skills in HTML, CSS, JavaScript and React. I'm hardworking and dedicated `;
  return (
    <div className="about">
      <div className="about__me">
        <p>ABOUT ME</p>
        <p className="about__bit">A bit about me.</p>
        <Article text={aboutMe} customClass={`about__art`} />
      </div>
      <aside>
        <Skills />
      </aside>
    </div>
  );
};

export default AboutMe;
