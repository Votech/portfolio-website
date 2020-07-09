import React from "react";
import "./Navbar.css";
import "../SideDrawer/DrawerToggleButton";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const navbar = (props) => {
  return (
    <header className="navbar">
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
