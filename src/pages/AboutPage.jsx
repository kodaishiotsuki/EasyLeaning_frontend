import React, { useEffect } from "react";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavgation/TopNavigation";
import AboutMe from "../components/AboutMe/AboutMe";

const AboutPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <TopNavigation title='About us' />
      <PageTop pageTitle='About Us' />
      <AboutMe />
      <AboutDescription />
      <Footer />
    </>
  );
};

export default AboutPage;
