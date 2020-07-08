import React, { useState } from "react";
import Particles from "react-particles-js";
import "./Hello.css";
import { ReactComponent as Arrow } from "./arrow.svg";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
    },
    links: {
      color: "#ffffff",
      distance: 200,
      enable: true,
      opacity: 0.5,
      width: 0.25,
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
      },
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    size: {
      value: 2.5,
      random: false,
    },
    color: {
      value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 2,
        opacity: 0.8,
        size: 20,
        speed: 3,
      },
    },
  },
};

const Hello = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div>
      <div className="container" id="home">
        <Particles className="particles" params={particlesOptions} />
        <div className="wrapper">
          <div className="text">
            Hello, I'm{" "}
            <span className="highlight" style={{ color: "#e31b6d" }}>
              {" "}
              Wojciech Mietlinski
            </span>
            . <br></br> I'm a full-stack developer.
          </div>
          <a href="#about">
            <button
              className="first_button"
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            >
              <div className="first_button_text">View my work</div>
              <Arrow className={hovered ? "arrow arrowRotate" : "arrow"} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hello;
