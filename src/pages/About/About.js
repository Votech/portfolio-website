import React from "react";
import "./About.css";
import SkillsList from "../../components/Skills_List/Skills_List";

const About = (props) => {
  return (
    <div className="container2" id="about">
      <div className="wrapper2">
        <div>
          <div className="titlePage">
            <h1>about</h1>
            <div className="bottom_border" />
          </div>
          <div className="about">
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
                  free to visit my <a href="\">contact section</a>.
                </p>
              </div>
            </div>
            <div className="about_skills">
              <div className="about_subtitle">My Skills</div>
              <div>
                <SkillsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
