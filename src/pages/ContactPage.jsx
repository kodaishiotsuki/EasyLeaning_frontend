import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavgation/TopNavigation";

const ContactPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <TopNavigation title='Contact Us' />
      <PageTop pageTitle='Contact Us' />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;
