import React, { useState, useEffect, } from "react";
import {useLocation} from 'react-router-dom';
import "./Navbar.css";
import "../SideDrawer/DrawerToggleButton";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Navbar = (props) => {
  let location  = useLocation();
  let { pathname } = location;
  
  const [navabarTransparent, setNavbarTransparent] = useState(false);
  const [scrollState, setScrollState] = useState("top")
  const [navbarBackground, setNavbarBackground] = useState('');

  useEffect(() => {
    pathname === "/about" || pathname === "/portfolio" ? setNavbarTransparent(true) : setNavbarTransparent(false); 
  },[pathname])

  useEffect(() => {
   let listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 57) {
        if (scrollState !== "scrolledDown") {
          setScrollState("scrolledDown")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  useEffect(() => {
    if (scrollState === "scrolledDown") {
      if (pathname === "/about") {
        setNavbarBackground('navbar--background-about')
      } else if (pathname === "/portfolio") {
        setNavbarBackground('navbar--background-portfolio')
      } else if (pathname === "/contact") {
        setNavbarBackground('navbar--background-contact')
      }
    } else {
      setNavbarBackground('')
    }
  },[pathname, scrollState])

  let navBarClasses = "navbar";
  if (props.navBarOpen === true) {
    navBarClasses = "navbar open";
  }

  return (
    <header className={`${navBarClasses} ${navbarBackground}`}>
      <nav className="navbar_navig">
        <div className="navbar_navig_items">
          <ul>
            <li>
              <NavLink
                exact
                activeClassName="navbar_navig_links--active"
                className={`navbar_navig_links ${navabarTransparent && "navbar_navig_links_dark"}`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="navbar_navig_links--active"
                className={`navbar_navig_links ${navabarTransparent && "navbar_navig_links_dark"}`}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="navbar_navig_links--active"
                className={`navbar_navig_links ${navabarTransparent && "navbar_navig_links_dark"}`}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="navbar_navig_links--active"
                className={`navbar_navig_links ${navabarTransparent && "navbar_navig_links_dark"}`}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="drawerToggleButton">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
