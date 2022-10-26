import React from "react";

const Article = ({ text, customClass }) => {
  return <div className={customClass}>{text}</div>;
};

export default Article;
