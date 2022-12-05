import React from "react";
import Image from "../../Atoms/Image";
import { Link } from "react-router-dom";
import "./Projects.scss";
const Projects = ({ id, image, title, article, connect }) => {
  return (
    <div className="project">
      <aside className="project__image">
        <Image src={image} customClass={`project__pics`} />
      </aside>
      <aside className="project__description">
        <p className="project__title">{title}</p>
        <p className="project__article">{article}</p>
        <Link to="/">
          <p className="connect__btn">{connect}</p>
        </Link>
      </aside>
    </div>
  );
};

export default Projects;
