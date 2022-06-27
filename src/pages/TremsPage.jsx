import React from "react";
import TremsDescription from "../components/TremsDescription/TremsDescription";
import TopNavigation from "../components/TopNavgation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

const TremsPage = () => {
  return (
    <>
      <TopNavigation title='Trems And Condition' />
      <PageTop pageTitle='Trems And Condition' />
      <TremsDescription />
      <Footer />
    </>
  );
};

export default TremsPage;
