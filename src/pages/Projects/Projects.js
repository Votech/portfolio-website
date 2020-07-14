import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

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
  hidden: { opacity: 1, x: "50vw" },
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
  hidden: { opacity: 1, x: "50vw" },
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

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const Projects = () => {
  return (
    <motion.div
      className="projects_container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects_wrapper">
        <div className="titlePage">
          <motion.h1 variants={item} initial="hidden" animate="visible">
            projects
          </motion.h1>
          <motion.div
            className="bottom_border"
            variants={item2}
            initial="hidden"
            animate="visible"
          />
        </div>
        <motion.div variants={item3} initial="hidden" animate="visible">
          <div className="project">
            <div className="project_info">
              <div className="project_title">Project Title</div>
              <div className="project_tag">Project tag</div>
              <div className="project_description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="project_buttons">
                <button>VIEW SITE</button>
                <button>SOURCE CODE</button>
              </div>
            </div>
            <div className="project_picture">
              <img src="https://dummyimage.com/1920x1200/000/fff.png&text=1920x1200"></img>
            </div>
          </div>
          <div className="project">
            <div className="project_info">
              <div className="project_title">Project Title</div>
              <div className="project_tag">Project tag</div>
              <div className="project_description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="project_buttons">
                <button>VIEW SITE</button>
                <button>SOURCE CODE</button>
              </div>
            </div>
            <div className="project_picture">
              <img src="https://dummyimage.com/1920x1200/000/fff.png&text=1920x1200"></img>
            </div>
          </div>
          <div className="project">
            <div className="project_info">
              <div className="project_title">Project Title</div>
              <div className="project_tag">Project tag</div>
              <div className="project_description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="project_buttons">
                <button>VIEW SITE</button>
                <button>SOURCE CODE</button>
              </div>
            </div>
            <div className="project_picture">
              <img src="https://dummyimage.com/1920x1200/000/fff.png&text=1920x1200"></img>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
