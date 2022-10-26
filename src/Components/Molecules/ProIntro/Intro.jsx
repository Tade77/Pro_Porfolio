import React from "react";
import "./Intro.scss";
const Intro = () => {
  const txt = `I like to build things
here are a few`;
  return (
    <div className="pro__header">
      <p className="pro__header__intro">PROJECTS</p>
      <p className="pro__header__txt">{txt}</p>
    </div>
  );
};

export default Intro;
