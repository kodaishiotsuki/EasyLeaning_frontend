import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AllServicePage from "../pages/AllServicePage";
import AllCoursePage from "../pages/AllCoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/service' element={<AllServicePage />} />
        <Route exact path='/course' element={<AllCoursePage />} />
        <Route exact path='/portfolio' element={<PortfolioPage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
