import React from "react";
import Image from "../../Atoms/Image";
import "./JobSearhStyle.scss";
const JobSearch = () => {
  return (
    <div className="project">
      <aside className="project__image">
        <Image src="/public/jobweb.png" customClass={`project__pics`} />
      </aside>
      <aside className="project__description">
        <p className="project__title">JobSearch App</p>
        <p className="project__article">
          This App is built purposely for users to search for job opportunities
          based on their area interest. It consist of several pages where users
          can sign up to view job opportunities. A form is also provided for
          users to input their data for job posting and newsletters. The App is
          still on development stage.
        </p>
        <a href="https://jobsearchapp77.netlify.app">
          <p className="connect__btn">Visit Website--&gt;</p>
        </a>
      </aside>
    </div>
  );
};

export default JobSearch;
