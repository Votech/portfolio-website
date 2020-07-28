import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import PortfolioGif from '../../components/Gifs/animation1.gif';
import PerfectPlateGif from '../../components/Gifs/PerfectPlate.gif';
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const item = {
  visible: {
    opacity: 1,
    x: '0',
    transition: {
      delay: 0,
      duration: 2,
      type: 'spring',
    },
  },
  hidden: { opacity: 1, x: '50vw' },
};

const item2 = {
  visible: {
    opacity: 1,
    x: '0',
    transition: {
      delay: 0.05,
      duration: 2,
      type: 'spring',
    },
  },
  hidden: { opacity: 1, x: '50vw' },
};

const item3 = {
  visible: {
    opacity: 1,
    y: '0',
    transition: {
      delay: 0.0,
      duration: 0.5,
    },
  },
  hidden: { opacity: 1, y: '50vh' },
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const Projects = () => {
  return (
    <motion.div
      className='projects_container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='projects_wrapper'>
        <div className='titlePage'>
          <motion.h1 variants={item} initial='hidden' animate='visible'>
            projects
          </motion.h1>
          <motion.div
            className='bottom_border'
            variants={item2}
            initial='hidden'
            animate='visible'
          />
        </div>
        <motion.div variants={item3} initial='hidden' animate='visible'>
          <div className='project'>
            <div className='project_info'>
              <div className='project_title'>Perfect Plate</div>
              <div className='project_tag'>Discover recipes</div>
              <div className='project_description'>
                <p>
                  With Perfect Plate you get access to over 3600k recipes. You
                  can search by ingredients, calories and nutrients. Website is
                  made in<span style={{ fontWeight: 'bold' }}> React.js</span>,
                  fetching data from spoonacular API. Use{' '}
                  <span style={{ fontWeight: 'bold' }}>React router</span> for
                  routes.{' '}
                  <span style={{ fontWeight: 'bold' }}>Material UI</span> for a
                  css.
                </p>
              </div>
              <div className='project_buttons'>
                <a href='https://silly-panini-3f0800.netlify.app/'>
                  <button className='project_button'>VIEW SITE</button>
                </a>
                <a href='https://github.com/Votech/foodie'>
                  <button className='project_button_view '>SOURCE CODE</button>
                </a>
              </div>
            </div>
            <div className='project_picture'>
              <img src={PerfectPlateGif} alt='Perfect Plate Gif'></img>
            </div>
          </div>
          <div className='project'>
            <div className='project_info'>
              <div className='project_title'>My Portfolio Website</div>
              <div className='project_tag'>portfolio website</div>
              <div className='project_description'>
                <p>
                  I created this website for my personal portfolio. Fully
                  responsive, use{' '}
                  <span style={{ fontWeight: 'bold' }}>React.js</span>. Have a
                  slider menu on mobile. Route transitions are animated. Contact
                  form is working with netlify. Navigated with{' '}
                  <span style={{ fontWeight: 'bold' }}>React router</span>.
                  Animations are made with{' '}
                  <span style={{ fontWeight: 'bold' }}>Framer motion.</span>
                </p>
              </div>
              <div className='project_buttons'>
                <a href='/'>
                  <button className='project_button'>VIEW SITE</button>
                </a>
                <a href='https://github.com/Votech/portfolio-website'>
                  <button className='project_button_view '>SOURCE CODE</button>
                </a>
              </div>
            </div>
            <div className='project_picture'>
              <img src={PortfolioGif} alt='portfolio gif'></img>
            </div>
          </div>

          <div className='project'>
            <div className='project_info'>
              <div className='project_title'>Project Title</div>
              <div className='project_tag'>Project tag</div>
              <div className='project_description'>
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
              <div className='project_buttons'>
                <button className='project_button'>VIEW SITE</button>
                <button className='project_button_view '>SOURCE CODE</button>
              </div>
            </div>
            <div className='project_picture'>
              <img src='https://dummyimage.com/1920x1200/000/fff.png&text=1920x1200'></img>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
