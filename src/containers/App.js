import React from "react";
import "./App.css";
import Hello from "../components/Hello/Hello";
import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/Backdrop/Backdrop";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <Hello />
      <Navbar />
      <SideDrawer />
      <Backdrop />
      <About />
    </div>
  );
};

export default App;
