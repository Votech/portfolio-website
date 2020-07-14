import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import SkillsList from "../../components/Skills_List/Skills_List";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const item = {
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      delay: 0,
      duration: 2,
      type: "spring",
    },
  },
  hidden: { opacity: 1, x: "-50vw" },
};

const item2 = {
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      delay: 0.05,
      duration: 2,
      type: "spring",
    },
  },
  hidden: { opacity: 1, x: "-50vw" },
};

const item3 = {
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 0.0,
      duration: 0.5,
    },
  },
  hidden: { opacity: 1, y: "50vh" },
};

const About = (props) => {
  return (
    <motion.div
      className="container2"
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="wrapper2">
        <div>
          <div className="titlePage">
            <motion.h1 variants={item} initial="hidden" animate="visible">
              about
            </motion.h1>
            <motion.div
              className="bottom_border"
              variants={item2}
              initial="hidden"
              animate="visible"
            />
          </div>
          <motion.div
            className="about"
            variants={item3}
            initial="hidden"
            animate="visible"
          >
            <div className="about_description">
              <div className="about_subtitle">Hi</div>
              <div>
                <p>
                  My name's Wojciech and I'm web developer who's passionate
                  about <span style={{ fontWeight: "bold" }}>JavaScript</span>.
                  I'm a developer, because I'm inspired by the idea of creating
                  applications. I love to learn and develop new skills. I'm
                  currently looking for oportunity to work with JavaScript
                  framework.
                </p>
                <br />
                <p>
                  When I'm not busy building apps, you can find me at downtown
                  socializing, eating pizza and cooking perfect Italian pasta.
                </p>
                <br />
                <p>
                  If you'd like to learn more about me or ask a question feel
                  free to visit my <a href="/contact">contact section</a>.
                </p>
              </div>
            </div>
            <div className="about_skills">
              <div className="about_subtitle">My Skills</div>
              <div>
                <SkillsList />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
