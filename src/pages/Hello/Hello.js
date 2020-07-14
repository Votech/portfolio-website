import React, { useState } from "react";
import Particles from "react-particles-js";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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

const item = {
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
  hidden: { opacity: 0 },
};

const item2 = {
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
    },
  },
  hidden: { opacity: 0 },
};

const item3 = {
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2,
    },
  },
  hidden: { opacity: 0 },
};
const item4 = {
  visible: {
    opacity: 1,
    transition: {
      delay: 4,
      duration: 2,
    },
  },
  hidden: { opacity: 0 },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1 },
  },
  exit: {
    y: "-100vh",
    opacity: 0.5,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

const Hello = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container" id="home">
        <Particles className="particles" params={particlesOptions} />
        <div className="wrapper">
          <div className="text">
            <motion.div
              style={{ display: "inline-block" }}
              variants={item}
              initial="hidden"
              animate="visible"
            >
              Hello,
            </motion.div>{" "}
            <motion.div
              style={{ display: "inline-block" }}
              variants={item2}
              initial="hidden"
              animate="visible"
            >
              {" "}
              I'm{" "}
              <span className="highlight" style={{ color: "#e31b6d" }}>
                {" "}
                Wojciech Mietlinski
              </span>
              .{" "}
            </motion.div>{" "}
            <motion.div variants={item3} initial="hidden" animate="visible">
              {" "}
              I'm a full-stack developer.
            </motion.div>
          </div>
          <motion.div variants={item4} initial="hidden" animate="visible">
            <NavLink to="/about">
              <button
                className="first_button"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
              >
                <div className="first_button_text">View my work</div>
                <Arrow className={hovered ? "arrow arrowRotate" : "arrow"} />
              </button>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hello;
