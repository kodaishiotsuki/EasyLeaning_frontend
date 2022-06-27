import React from "react";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";
import TopNavigation from "../components/TopNavgation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

const PrivacyPage = () => {
  return (
    <>
      <TopNavigation title='Privacy And Policy' />
      <PageTop pageTitle='Privacy And Policy' />
      <PrivacyDescription />
      <Footer />
    </>
  );
};

export default PrivacyPage;
