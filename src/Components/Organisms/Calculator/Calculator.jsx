import React from "react";
import Image from "../../Atoms/Image";

const Calculator = () => {
  return (
    <div>
      <div className="project">
        <aside className="project__image">
          <Image src="/calc.png" customClass={`project__pics`} />
        </aside>
        <aside className="project__description">
          <p className="project__title">Simple Calculator App</p>
          <p className="project__article">
            This Application is a simple calculator. It is built with react. It
            can be used to calculate simple arithmetics .
          </p>
          <a href="https://twitter.com/code77">
            <p className="connect__btn">Visit Website--&gt;</p>
          </a>
        </aside>
      </div>
    </div>
  );
};

export default Calculator;
