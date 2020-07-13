import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Hello from "../pages/Hello/Hello";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Navbar from "../components/Navbar/Navbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/Backdrop/Backdrop";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    navBarOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  navBarOpener = () => {
    if (this.state.navBarOpen === false) {
      this.setState({ navBarOpen: true });
    }
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (this.props.location.pathname !== "/") {
      this.navBarOpener();
    }

    return (
      <div style={{ height: "100%" }}>
        <ScrollToTop />
        <Navbar
          drawerClickHandler={this.drawerToggleClickHandler}
          navBarOpen={this.state.navBarOpen}
        />
        {this.props.location.pathname !== "/" ? (
          <SideDrawer
            show={this.state.sideDrawerOpen}
            click={this.backdropClickHandler}
          />
        ) : null}
        {backdrop}
        <Switch location={this.props.location}>
          <Route exact path="/" component={Hello} />
          <Route
            exact
            path="/about"
            render={(props) => (
              <About
                {...props}
                route={this.state.route}
                navBarOpener={this.navBarOpener}
              />
            )}
          />
          <Route exact path="/portfolio" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        {this.props.location.pathname !== "/" ? <Footer /> : null}
      </div>
    );
  }
}

export default withRouter(App);
