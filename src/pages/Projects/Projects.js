import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Pic11 from '../../components/images/1-pic-1.png';
import Pic12 from '../../components/images/1-pic-2.png';
import Pic13 from '../../components/images/1-pic-3.png';
import Pic14 from '../../components/images/1-pic-4.png';
import Pic21 from '../../components/images/2-pic-1.png';
import Pic22 from '../../components/images/2-pic-2.png';
import Pic23 from '../../components/images/2-pic-3.png';
import Pic31 from '../../components/images/3-pic-1.png';
import Pic32 from '../../components/images/3-pic-2.png';
import Pic33 from '../../components/images/3-pic-3.png';
import Pic35 from '../../components/images/3-pic-5.png';
import Pic36 from '../../components/images/3-pic-6.png';
import Pic41 from '../../components/images/4-pic-1.png';
import Pic42 from '../../components/images/4-pic-2.png';
import Pic43 from '../../components/images/4-pic-3.png';
import Pic44 from '../../components/images/4-pic-4.png';
import Pic45 from '../../components/images/4-pic-5.png';

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
              <div className='project_title'>Friend Book</div>
              <div className='project_tag'>Facebook clone</div>
              <div className='project_description'>
                <p>
                  Friend-book is a facebook clone, users can create posts,
                  comment them and like them. Pictures can be uploaded directly
                  from device or by pasting URL to the picture. Users can also
                  search for friends and send them friend request. All requests
                  will show up in notification component. App is deployed on
                  Heroku. Stack:{' '}
                  <span className='bold'>
                    React.js, Redux, Firebase, Sass, Heroku{' '}
                  </span>
                  <br />
                  <br />
                  <span className='bold'>(Real time chat is comming soon)</span>
                  <br />
                  <br />
                  <span style={{ color: 'red' }}>
                    *First access to the app might take some extra time, due to
                    free tier on heroku*
                  </span>
                </p>
              </div>
              <div className='project_buttons'>
                <a href='https://friend-book-app.herokuapp.com/'>
                  <button className='project_button'>VIEW SITE</button>
                </a>
                <a href='https://github.com/Votech/friend-book'>
                  <button className='project_button_view '>SOURCE CODE</button>
                </a>
              </div>
            </div>
            <div className='project_picture'>
              <Carousel showStatus={false} showThumbs={false}>
                <div>
                  <img src={Pic41} alt='front page' />
                </div>
                <div>
                  <img src={Pic42} alt='second page' />
                </div>
                <div>
                  <img src={Pic43} alt='third page' />
                </div>
                <div>
                  <img src={Pic44} alt='contact page page' />
                </div>
                <div>
                  <img src={Pic45} alt='contact page page' />
                </div>
              </Carousel>
            </div>
          </div>
          <div className='project'>
            <div className='project_info'>
              <div className='project_title'>Crwn Clothing</div>
              <div className='project_tag'>e-commerce website</div>
              <div className='project_description'>
                <p>
                  Crwn Clothing is a e-commerce website made with
                  <span className='bold'>React.js</span>. Users can create new
                  account or log in with google. Accounts are authenticated and
                  stored in <span className='bold'>Firebase</span>. Items inside
                  the cart are stored in local storage. Payments are processed
                  with <span className='bold'>Stripe</span>. State is managed
                  with
                  <span className='bold'> Redux</span>. Website is styled with
                  <span className='bold'>Sass</span> and is fully responsive.
                  Hosted with <span className='bold'>Heroku</span>
                  <br />
                  <br />
                  <span style={{ color: 'red' }}>
                    *First access to the app might take some extra time, due to
                    free tier on heroku*
                  </span>
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
              <Carousel showStatus={false} showThumbs={false}>
                <div>
                  <img src={Pic31} alt='front page' />
                </div>
                <div>
                  <img src={Pic32} alt='second page' />
                </div>
                <div>
                  <img src={Pic33} alt='third page' />
                </div>
                <div>
                  <img src={Pic35} alt='contact page page' />
                </div>
                <div>
                  <img src={Pic36} alt='contact page page' />
                </div>
              </Carousel>
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
              <Carousel showStatus={false} showThumbs={false}>
                <div>
                  <img src={Pic21} alt='front page' />
                </div>
                <div>
                  <img src={Pic22} alt='second page' />
                </div>
                <div>
                  <img src={Pic23} alt='third page' />
                </div>
              </Carousel>
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
              <Carousel showStatus={false} showThumbs={false}>
                <div>
                  <img src={Pic11} alt='front page' />
                </div>
                <div>
                  <img src={Pic12} alt='second page' />
                </div>
                <div>
                  <img src={Pic13} alt='third page' />
                </div>
                <div>
                  <img src={Pic14} alt='contact page page' />
                </div>
              </Carousel>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
