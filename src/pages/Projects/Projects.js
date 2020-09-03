import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import PortfolioGif from '../../components/Gifs/animation1.gif';
import PerfectPlateGif from '../../components/Gifs/PerfectPlate.gif';
import EcommerceGif from '../../components/Gifs/ecommerce.gif';
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
              <div className='project_title'>Crwn Clothing</div>
              <div className='project_tag'>e-commerce website</div>
              <div className='project_description'>
                <p>
                  Crwn Clothing is a e-commerce website made with{' '}
                  <span className='bold'>React.js</span>. Users can create new
                  account or log in with google. Accounts are authenticated and
                  stored in <span className='bold'>Firebase</span>. Items inside
                  the cart are stored in local storage. Payments are processed
                  with <span className='bold'>Stripe</span>. State is managed
                  with
                  <span className='bold'> Redux</span>. Website is styled with{' '}
                  <span className='bold'>Sass</span> and is fully responsive.
                  Hosted with <span className='bold'>Heroku</span>
                </p>
              </div>
              <div className='project_buttons'>
                <a href='https://go-crwn-ecommerce.herokuapp.com/'>
                  <button className='project_button'>VIEW SITE</button>
                </a>
                <a href='https://github.com/Votech/e-shop'>
                  <button className='project_button_view '>SOURCE CODE</button>
                </a>
              </div>
            </div>
            <div className='project_picture'>
              <img src={EcommerceGif} alt='Perfect Plate Gif'></img>
            </div>
          </div>
          <div className='project'>
            <div className='project_info'>
              <div className='project_title'>Perfect Plate</div>
              <div className='project_tag'>Discover recipes</div>
              <div className='project_description'>
                <p>
                  With Perfect Plate you get access to over 3600k recipes. You
                  can search by ingredients, calories and nutrients. Website is
                  made in<span className='bold'> React.js</span>, fetching data
                  from spoonacular API.
                  <span className='bold'> React router</span> for routes. Styled
                  with
                  <span className='bold'> Material UI</span>.
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
                  I created this website with{' '}
                  <span className='bold'>React.js</span> for my personal
                  portfolio. Fully responsive. Have a slider menu on mobile.
                  Route transitions are animated. Contact form is working with
                  netlify. Navigated with{' '}
                  <span className='bold'>React router</span>. Animations are
                  made with <span className='bold'>Framer motion.</span>
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
