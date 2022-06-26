import React from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavgation/TopNavigation";

const AllServicePage = () => {
  return (
    <>
      <TopNavigation />
      <PageTop pageTitle='Our Services' />
      <Services />
      <ContactSection />
      <Footer />
    </>
  );
};

export default AllServicePage;
