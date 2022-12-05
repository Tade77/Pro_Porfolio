import React from "react";
import Image from "../../Atoms/Image";
import "./Picture.scss";

const Picture = () => {
  return (
    <div className="">
      <Image src={`/Adekeye.jpg`} customClass={`pics`} />
      {/* <p className="pics__shadow">shadow</p> */}
    </div>
  );
};

export default Picture;
