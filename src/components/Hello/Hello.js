import React from "react";
import Particles from "react-particles-js";
import "./Hello.css";

const particlesOptions = {
  particles: {
    number: {
      value: 60,
    },
    links: {
      color: "#ffffff",
      distance: 200,
      enable: true,
      opacity: 0.5,
      width: 1,
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
      speed: 2,
      straight: false,
    },
    size: {
      value: 3,
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
  return (
    <div>
      <div className="container">
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
          <button>View my work</button>
        </div>
      </div>
    </div>
  );
};

export default Hello;
