import React from "react";
import "./Navbar.css";
import "../SideDrawer/DrawerToggleButton";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const navbar = (props) => {
  let navBarClasses = "navbar";
  if (props.navBarOpen === true) {
    navBarClasses = "navbar open";
  }

  return (
    <header className={navBarClasses}>
      <nav className="navbar_navig">
        <div className="navbar_navig_items">
          <ul>
            <li>
              <NavLink
                exact
                activeClassName="navbar_navig_links--active"
                className="navbar_navig_links"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="navbar_navig_links--active"
                className="navbar_navig_links"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="navbar_navig_links--active"
                className="navbar_navig_links"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="navbar_navig_links--active"
                className="navbar_navig_links"
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

export default navbar;
