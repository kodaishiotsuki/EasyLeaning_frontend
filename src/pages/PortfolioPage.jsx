import React, { useEffect } from "react";
import AllProjects from "../components/Allprojects/AllProjects";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavgation/TopNavigation";

const PortfolioPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <TopNavigation title='Our Portfolio' />
      <PageTop pageTitle='Our Portfolio' />
      <AllProjects />
      <Footer />
    </>
  );
};

export default PortfolioPage;
