import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Article from "../../Atoms/Article";
import Button from "../../Atoms/Button";
import "./ContactMe.scss";

const ContacMe = () => {
  const [isChat, setIsChat] = useState(false);
  const handleChat = () => {
    setIsChat(true);
  };
  const myInfo = `  I'm a Junior Frontend developer with a passion for everything in front-end. 
  Welcome to my corner of the internet. I'm glad you're here!`;
  return (
    <div className="info">
      <Article text={myInfo} customClass={`info__me`} />
      <Button
        label={`Let's chat -->`}
        customClass={`info__chat`}
        onClick={() => {
          handleChat;
        }}
      />
      {isChat && <Link to="linkedin"></Link>}
    </div>
  );
};

export default ContacMe;
