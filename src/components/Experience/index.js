import React, { useState } from "react";
import { FaBootstrap, FaGithub, FaUnity } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import "./Experience.css"
import { TopLineThree } from "./ExperienceElements";

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs_wrapper" id="experience">
      <TopLineThree>Tools I've Worked With</TopLineThree>
      <div className="tabs_container">
        <div className="tab-header">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <i>
              <FaBootstrap />
            </i>
            BootStrap
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <i>
              <SiFirebase />
            </i>
            Firebase
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <i>
              <FaGithub />
            </i>
            Git & GitHub
          </div>
          <div
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            <i>
              <FaUnity />
            </i>
            Unity
          </div>
        </div>

        <div className="tab-content">
          <div className="active"></div>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <i>
              <FaBootstrap />
            </i>
            <h2>BootStrap</h2>
            <p>I use this tool for projects that are less design intensive.</p>
            <p>
              It helps me come up with good designs and functionalities in a
              short space of time.
            </p>
            <p>
              I also make use of the themes that this framework has got to
              offer.
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <i>
              <SiFirebase />
            </i>
            <h2>Firebase</h2>
            <p>
              Recently discovered this tool and I must say, it has proven to be
              one powerful tool to set up the backend for a project.
            </p>
            <p>
              Although I have also used other tools such as the AWS Elastic
              beanstalk to achieve the same goals, I seem to like firebase
              better because of its sophisticated yet easy technic for solving
              complicated backend functions.
            </p>
            <p>
              User authentication and payments using technologies such as stripe
              have made project build procedures to be such a breeze.
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <i>
              <FaGithub />
            </i>
            <h2>Git & GitHub</h2>
            <p>
              Coming from a self-taught who has broken many applications I was
              working on due to a lack of proper files and project management,
              discovering Git & GitHub was such a relief.
            </p>
            <p>
              Nowadays, having a git repo and running commits are more like
              second nature while working on projects.
            </p>
          </div>

          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <i>
              <FaUnity />
            </i>
            <h2>Unity</h2>
            <p>
              Although being a game engine, I find this tool really helpful in
              building some interactive designs. The fact that it also supports
              javascript makes it easy for me to dive in and make some
              nice-looking apps with it. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
