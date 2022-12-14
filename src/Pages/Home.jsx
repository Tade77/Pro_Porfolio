import React from "react";
import PageLayout from "../Components/Template/PageLayout";
import Contact_Btn from "../Components/Molecules/InfoButton/Contact_Btn";
import MyIntro from "../Components/Molecules/MyIntro/MyIntro";
import Intro from "../Components/Molecules/ProIntro/Intro";
import Projects from "../Components/Organisms/Projects/Projects";
import AboutMe from "../Components/Molecules/About/AboutMe";
import Social_Icons from "../Components/Molecules/Icons/Social_Icons";

const Home = ({ handleToggle, theme }) => {
  return (
    <PageLayout handleToggle={handleToggle} theme={theme}>
      <MyIntro />
      <AboutMe />
      <Intro />
      <Projects />
      <Contact_Btn />
      <Social_Icons />
    </PageLayout>
  );
};

export default Home;
