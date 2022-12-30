import React from "react";
import ContacMe from "../Contact/ContacMe";
import Picture from "../Picture/Picture";
import "./MyIntro.scss";

const MyIntro = () => {
  const myName = "ADEKEYE TAOFEEQ";

  return (
    <div className="header">
      <div className="">
        <p className="header__hey">Hey, there.</p>
        <span className={`header__am`}>
          I'm <span className="header__name">{myName}</span>
        </span>
        <ContacMe />
      </div>

      <div className="pic">
        <Picture />
      </div>
    </div>
  );
};

export default MyIntro;

//
