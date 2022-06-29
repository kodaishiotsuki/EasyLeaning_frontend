import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import whiteLogo from "../../assets/Image/logo_white.png";
import blackLogo from "../../assets/Image/logo_black.png";
import "../../assets/css/custom.css";
import { NavLink } from "react-router-dom";

const TopNavigation = ({ title }) => {
  const [navBarTitle, setNavBarTitle] = useState("navTitle");
  const [navBarLogo, setNavBarLogo] = useState(whiteLogo);
  const [navBavBackGround, setNavBarBackGround] = useState("navBackground");
  const [navBarItem, setNavBarItem] = useState("navItem");
  const [navVariant, setNavVariant] = useState("dark");
  const [pageTitle, setPageTitle] = useState(title);

  //スクロール時の条件定義
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setNavBarTitle("navTitleScroll");
      setNavBarLogo(blackLogo);
      setNavBarBackGround("navBackgroundScroll");
      setNavBarItem("navItemScroll");
      setNavVariant("light");
    } else if (window.scrollY < 100) {
      setNavBarTitle("navTitle");
      setNavBarLogo(whiteLogo);
      setNavBarBackGround("navBackground");
      setNavBarItem("navItem");
      setNavVariant("dark");
    }
  };

  //スクロールの検知
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <title>{pageTitle}</title>
      <Navbar
        className={navBavBackGround}
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant={navVariant}
        fixed='top'
      >
        <Navbar.Brand className={navBarTitle}>
          <NavLink to='/'>
            <img src={navBarLogo} alt='' />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Nav.Link>
              <NavLink
                exact='true'
                style={({ isActive }) => ({
                  color: isActive ? "#ffd900" : "#ffffff",
                })}
                className={navBarItem}
                to='/'
              >
                HOME
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink
                exact='true'
                style={({ isActive }) => ({
                  color: isActive ? "#ffd900" : "#ffffff",
                })}
                className={navBarItem}
                to='/about'
              >
                ABOUT
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink
                exact='true'
                style={({ isActive }) => ({
                  color: isActive ? "#ffd900" : "#ffffff",
                })}
                className={navBarItem}
                to='/service'
              >
                SERVICE
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink
                exact='true'
                style={({ isActive }) => ({
                  color: isActive ? "#ffd900" : "#ffffff",
                })}
                className={navBarItem}
                to='/course'
              >
                COURSES
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink
                exact='true'
                style={({ isActive }) => ({
                  color: isActive ? "#ffd900" : "#ffffff",
                })}
                className={navBarItem}
                to='/portfolio'
              >
                PORTFOLIO
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink
                exact='true'
                style={({ isActive }) => ({
                  color: isActive ? "#ffd900" : "#ffffff",
                })}
                className={navBarItem}
                to='/contact'
              >
                CONTACT
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavigation;
