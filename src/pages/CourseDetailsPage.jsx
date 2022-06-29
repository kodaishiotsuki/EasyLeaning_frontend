import React from "react";
import CoursesDetails from "../components/CoursesDetails/CoursesDetails";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavgation/TopNavigation";

const CourseDetailsPage = () => {
  return (
    <>
      <TopNavigation title='Coursers Details' />
      <PageTop pageTitle='Coursers Details' />
      <CoursesDetails />
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
