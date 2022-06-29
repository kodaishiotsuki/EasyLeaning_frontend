import React, { useEffect } from "react";
import TopNavigation from "../components/TopNavgation/TopNavigation";
import AboutMe from "../components/AboutMe/AboutMe";
import Analysis from "../components/Analysis/Analysis";
import ClientReview from "../components/ClientReview/ClientReview";
import Courses from "../components/Courses/Courses";
import Footer from "../components/Footer/Footer";
import RecentProject from "../components/RecentProject/RecentProject";
import Services from "../components/Services/Services";
import Summary from "../components/Summary/Summary";
import TopBanner from "../components/TopBanner/TopBanner";
import Video from "../components/Video/Video";
import Welcome from "../components/Welcome/Welcome";

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <TopNavigation title='easy Leaning Page' />
      <TopBanner />
      <Welcome />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Courses />
      <Video />
      <ClientReview />
      <AboutMe />
      <Footer />
    </>
  );
};

export default HomePage;
