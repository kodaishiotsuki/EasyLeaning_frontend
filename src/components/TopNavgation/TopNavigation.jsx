import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import whiteLogo from "../../assets/Image/logo_white.png";
import blackLogo from "../../assets/Image/logo_black.png";
import "../../assets/css/custom.css";

const TopNavigation = () => {
  const [navBarTitle, setNavBarTitle] = useState("navTitle");
  const [navBarLogo, setNavBarLogo] = useState(whiteLogo);
  const [navBavBackGround, setNavBarBackGround] = useState("navBackground");
  const [navBarItem, setNavBarItem] = useState("navItem");

  //スクロール時の条件定義
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setNavBarTitle("navTitleScroll");
      setNavBarLogo(blackLogo);
      setNavBarBackGround("navBackgroundScroll");
      setNavBarItem("navItemScroll");
    } else if (window.scrollY < 100) {
      setNavBarTitle("navTitle");
      setNavBarLogo(whiteLogo);
      setNavBarBackGround("navBackground");
      setNavBarItem("navItem");
    }
  };

  //スクロールの検知
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Navbar
        className={navBavBackGround}
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        fixed='top'
      >
        <Navbar.Brand className={navBarTitle} href='#home'>
          <img src={navBarLogo} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Nav.Link className={navBarItem} href='#deets'>
              HOME
            </Nav.Link>
            <Nav.Link className={navBarItem} href='#deets'>
              ABOUT
            </Nav.Link>
            <Nav.Link className={navBarItem} href='#deets'>
              SERVICE
            </Nav.Link>
            <Nav.Link className={navBarItem} href='#deets'>
              COURSES
            </Nav.Link>
            <Nav.Link className={navBarItem} href='#deets'>
              PORTFOLIO
            </Nav.Link>
            <Nav.Link className={navBarItem} href='#deets'>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavigation;
