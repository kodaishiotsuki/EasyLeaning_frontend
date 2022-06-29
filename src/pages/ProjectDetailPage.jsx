import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import ProjectDetails from "../components/Projectdetails/ProjectDetails";
import TopNavigation from "../components/TopNavgation/TopNavigation";

const ProjectDetailPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <TopNavigation title='Project Details' />
      <PageTop pageTitle='Project Details' />
      <ProjectDetails />
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
