import React from "react";
import Image from "../../Atoms/Image";

const Cv = () => {
  return (
    <div>
      <div className="project">
        <aside className="project__image">
          <Image src="/CVdashboard.png" customClass={`project__pics`} />
        </aside>
        <aside className="project__description">
          <p className="project__title">CodeVillage Dashboard App</p>
          <p className="project__article">
            The codevillage dashboard App is a web application that is for a
            mini organization. It is control by the admin purposely for staff
            daily sign in and sign out. After the user sign in, it will display
            the user info and the local time that the user sign in.
          </p>
          <a href="https://engrtade-code771.netlify.app">
            <p className="connect__btn">Visit Website--&gt;</p>
          </a>
        </aside>
      </div>
    </div>
  );
};

export default Cv;
