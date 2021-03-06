import React, { useEffect } from "react";
import RefundDescription from "../components/RefundDescription/RefundDescription";
import TopNavigation from "../components/TopNavgation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";

const RefundPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <TopNavigation title='Refund Policy' />
      <PageTop pageTitle='Refund Policy' />
      <RefundDescription />
      <Footer />
    </>
  );
};

export default RefundPage;
