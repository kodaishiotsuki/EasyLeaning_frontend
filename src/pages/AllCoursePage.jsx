import React from "react";
import TopNavigation from "../components/TopNavgation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCorses from "../components/AllCorses/AllCorses";
import Footer from "../components/Footer/Footer";

const AllCoursePage = () => {
  return (
    <>
      <TopNavigation />
      <PageTop pageTitle='All Courses' />
      <AllCorses />
      <Footer />
    </>
  );
};

export default AllCoursePage;
