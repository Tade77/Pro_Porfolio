import React from "react";
import BmiCal from "../Bmi/BmiCal";
import Calculator from "../Calculator/Calculator";
import Cv from "../CV/Cv";
import JobSearch from "../JobApp/JobSearch";
import RandomNum from "../Rgb/RandomNum";

import "./Projects.scss";
const Projects = () => {
  return (
    <div>
      <JobSearch />
      <Cv />
      <Calculator />
      <BmiCal />
      <RandomNum />
    </div>
  );
};

export default Projects;
