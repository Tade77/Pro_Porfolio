import React from "react";
import Article from "../../Atoms/Article";
import Skills from "../Skill/Skills";
import "./AboutMe.scss";

const AboutMe = () => {
  const aboutMe = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nunc 
  ultrices ac mauris, quis erat consequat odio. Pretium aliquet nunc eget consectetur diam felis justo. Tempor ornare nunc facilisi amet. Sed dui 
  orci, ut pharetra. Vulputate id lectus laoreet sagittis non.
  Pharetra purus quam mauris malesuada etiam nullam. Ultrices nec in massa consequat erat iaculis leo. `;
  return (
    <div className="about">
      <div className="about__me">
        <p>ABOUT ME</p>
        <p className="about__bit">A bit about me.</p>
        <Article text={aboutMe} customClass={`about__art`} />
      </div>
      <aside>
        <Skills />
      </aside>
    </div>
  );
};

export default AboutMe;
