import React from "react";
import "./Navbar.css";
import "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const navbar = (props) => {
  return (
    <header className="navbar">
      <nav className="navbar_navig">
        <div className="navbar_navig_items">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Contact</a>
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
