import React from "react";
import Image from "../../Atoms/Image";

const BmiCal = () => {
  return (
    <div>
      <div className="project">
        <aside className="project__image">
          <Image src="/BMI.png" customClass={`project__pics`} />
        </aside>
        <aside className="project__description">
          <p className="project__title">BMI Calculator App</p>
          <p className="project__article">
            Body Mass Index (BMI) is a mini application for determining the mass
            index of the body. It also include a remark for the user to
            understand the state of his/her body. It is built with HTML, CSS and
            Javascript .
          </p>
          <a href="https://engrtade-bmi-calculator.netlify.app">
            <p className="connect__btn">Visit Website--&gt;</p>
          </a>
        </aside>
      </div>
    </div>
  );
};

export default BmiCal;
