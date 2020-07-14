import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { ReactComponent as FacebookIcon } from "../../components/icons/iconmonstr-facebook-3.svg";
import { ReactComponent as GithubIcon } from "../../components/icons/iconmonstr-github-1.svg";
import { ReactComponent as LinkedinIcon } from "../../components/icons/iconmonstr-linkedin-3.svg";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1 },
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
  hidden: { opacity: 1, x: "50vw" },
};

const item3 = {
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      delay: 0.1,
      duration: 2,
      type: "spring",
    },
  },
  hidden: { opacity: 1, x: "-50vw" },
};

const item4 = {
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

const icon = {
  hover: {
    scale: 1.25,
  },
};

const Contact = () => {
  return (
    <motion.div
      className="contact_container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="contact_wrapper">
        <div className="titlePageContact">
          <motion.h1 variants={item} initial="hidden" animate="visible">
            Contact
          </motion.h1>
          <motion.div
            className="bottom_border_contact"
            variants={item2}
            initial="hidden"
            animate="visible"
          />
        </div>
        <motion.div
          className="contact_highlight"
          variants={item3}
          initial="hidden"
          animate="visible"
        >
          Have a question or want to work together?
        </motion.div>
        <motion.div variants={item4} initial="hidden" animate="visible">
          <form
            className="contact_form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input placeholder="Name" type="text" name="name" required />
            <input
              placeholder="Enter email"
              type="email"
              name="email"
              required
            />
            <textarea
              placeholder="Your Message"
              type="text"
              name="message"
            ></textarea>
            <input
              className="contact_button"
              type="submit"
              id="submit"
              value="SUBMIT"
            />
          </form>
          <div className="footer_icons">
            <motion.a
              href="https://www.linkedin.com/in/wojciech-mietlinski-a2b8a81ab/"
              variants={icon}
              whileHover="hover"
            >
              <div className="footer_icon">
                <LinkedinIcon />
              </div>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=100009946453992"
              variants={icon}
              whileHover="hover"
            >
              <div className="footer_icon">
                <FacebookIcon />
              </div>
            </motion.a>
            <motion.a
              href="https://github.com/Votech"
              variants={icon}
              whileHover="hover"
            >
              <div className="footer_icon">
                <GithubIcon />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
