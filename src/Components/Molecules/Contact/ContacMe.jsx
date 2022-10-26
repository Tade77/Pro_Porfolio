import React from "react";
import Article from "../../Atoms/Article";
import Button from "../../Atoms/Button";
import "./ContactMe.scss";

const ContacMe = () => {
  const handleChat = () => {
    prompt("let's chat");
  };
  const myInfo = `  I'm a senior full stack engineer with a passion for everything in front-end. 
  Welcome to my corner of the internet. I'm glad you're here!`;
  return (
    <div className="info">
      <Article text={myInfo} customClass={`info__me`} />
      <Button
        label={`Let's chat -->`}
        customClass={`info__chat`}
        onClick={handleChat}
      />
    </div>
  );
};

export default ContacMe;
