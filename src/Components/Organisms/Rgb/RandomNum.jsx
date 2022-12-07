import React from "react";
import Image from "../../Atoms/Image";

const RandomNum = () => {
  return (
    <div>
      <div className="project">
        <aside className="project__image">
          <Image src="/java.png" customClass={`project__pics`} />
        </aside>
        <aside className="project__description">
          <p className="project__title">RandomNumberColor App</p>
          <p className="project__article">
            This application is built using HTML, CSS and Javascript. It consist
            of numbers in a rectangular shape that display numbers in RGB
            colors.
          </p>
          <a href="https://twitter.com/code77">
            <p className="connect__btn">Visit Website--&gt;</p>
          </a>
        </aside>
      </div>
    </div>
  );
};

export default RandomNum;
