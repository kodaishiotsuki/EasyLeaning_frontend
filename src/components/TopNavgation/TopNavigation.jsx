import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const TopNavigation = () => {
  const [navBarTitle, setNavBarTitle] = useState("navTitle");

  //スクロール条件定義
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setNavBarTitle("navTitleScroll");
    } else if (window.scrollY < 100) {
      setNavBarTitle("navTitle");
    }
  };

  //スクロールの検知
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='top'>
        <Navbar.Brand className={navBarTitle} href='#home'>
          Easy Leaning
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Nav.Link href='#deets'>HOME</Nav.Link>
            <Nav.Link href='#deets'>ABOUT</Nav.Link>
            <Nav.Link href='#deets'>SERVICE</Nav.Link>
            <Nav.Link href='#deets'>COURSES</Nav.Link>
            <Nav.Link href='#deets'>PORTFOLIO</Nav.Link>
            <Nav.Link href='#deets'>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavigation;
