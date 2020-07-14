import React from "react";
import "./SideDrawer.css";
import { NavLink } from "react-router-dom";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses} onClick={props.click}>
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
    </nav>
  );
};

export default sideDrawer;
