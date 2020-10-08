import React from 'react';
import './Skill_List.css';

import { ReactComponent as HtmlIcon } from '../icons/html5.svg';
import { ReactComponent as CssIcon } from '../icons/css-5.svg';
import { ReactComponent as JsIcon } from '../icons/js.svg';
import { ReactComponent as MaterialIcon } from '../icons/material-ui-1.svg';
import { ReactComponent as SassIcon } from '../icons/sass-1.svg';
import { ReactComponent as ReactIcon } from '../icons/react.svg';
import { ReactComponent as NodejsIcon } from '../icons/nodejs-icon.svg';
import { ReactComponent as PostgresqlIcon } from '../icons/postgresql.svg';
import { ReactComponent as ReduxIcon } from '../icons/redux.svg';
import { ReactComponent as FirebaseIcon } from '../icons/firebase.svg';
import { ReactComponent as GitIcon } from '../icons/git.svg';
import { ReactComponent as HerokuIcon } from '../icons/heroku-icon.svg';

const skill_list = () => {
  return (
    <div className='container_skills'>
      <div className='card_skills'>
        <HtmlIcon className='icon' />
        <div>
          <b>Html 5</b>
        </div>
      </div>
      <div className='card_skills'>
        <CssIcon className='icon' />
        <div>
          <b>Css 3</b>
        </div>
      </div>
      <div className='card_skills'>
        <JsIcon className='icon' />
        <div>
          <b>JavaScript</b>
        </div>
      </div>
      <div className='card_skills'>
        <GitIcon className='icon' />
        <div>
          <b>Git</b>
        </div>
      </div>
      <div className='card_skills'>
        <SassIcon className='icon' />
        <div>
          <b>Sass</b>
        </div>
      </div>
      <div className='card_skills'>
        <MaterialIcon className='icon' />
        <div>
          <b>Material UI</b>
        </div>
      </div>
      <div className='card_skills'>
        <ReactIcon className='icon' />
        <div>
          <b>React</b>
        </div>
      </div>
      <div className='card_skills'>
        <ReduxIcon className='icon' />
        <div>
          <b>Redux</b>
        </div>
      </div>
      <div className='card_skills'>
        <FirebaseIcon className='icon' />
        <div>
          <b>Firebase</b>
        </div>
      </div>
      <div className='card_skills'>
        <NodejsIcon className='icon' />
        <div>
          <b>Node.js</b>
        </div>
      </div>
      <div className='card_skills'>
        <PostgresqlIcon className='icon' />
        <div>
          <b>PostgreSQL</b>
        </div>
      </div>
      <div className='card_skills'>
        <HerokuIcon className='icon' />
        <div>
          <b>Heroku</b>
        </div>
      </div>
    </div>
  );
};

export default skill_list;
