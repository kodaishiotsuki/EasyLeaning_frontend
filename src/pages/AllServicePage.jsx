import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavgation/TopNavigation";

const AllServicePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <TopNavigation title='Our Services' />
      <PageTop pageTitle='Our Services' />
      <Services />
      <ContactSection />
      <Footer />
    </>
  );
};

export default AllServicePage;
