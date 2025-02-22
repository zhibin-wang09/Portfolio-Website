import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import ReactDOM from "react-dom/client";
import "./App.css";
import logo from "./img/github.png";
import google from "./img/googlesprint.jpg";
import linkedinlogo from "./img/linkedin.png";
import gingerbreadevent from "./img/Gingerbreadevent.png";
import lab from "./img/Lab.jpg";
import capitalone from "./img/capitalone.HEIC";
import java from "./tool_icons/java.png";
import springboot from "./tool_icons/springboot.png";
import git from "./tool_icons/git.png";
import c from "./tool_icons/C.png";
import linux from "./tool_icons/linux.png";
import cli from "./tool_icons/cli.png";
import js from "./tool_icons/nodejs.png";
import html from "./tool_icons/html.png";
import css from "./tool_icons/css.png";
import react from "./tool_icons/react.png";
import express from "./tool_icons/expressjs.png";
import mongodb from "./tool_icons/mongodb.png";
import typescript from "./tool_icons/ts.png";
import socketio from "./tool_icons/socketio.png";
import framermotion from "./tool_icons/framermotion.png";
import chakraui from "./tool_icons/chakraui.png";
import redis from "./tool_icons/redis.webp";

function Contact() {
  return (
    <div id="footer-contact">
      <h1>Get in touch</h1>
      <p>
        I would be happy to further discuss my experiences with you, simply
        shoot me an email or message me on LinkedIn! :)
      </p>
      <p>
        <a href="mailto:zhib.wang09@gmail.com">zhib.wang09@gmail.com</a>
      </p>
      <div id="footer-icon-link">
        <a
          href="https://github.com/zhibin-wang09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="link-icon" src={logo} alt="github logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/zhi-bin-wang-62996a22b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="linkedinlogo" src={linkedinlogo} alt="linkedin logo" />
        </a>
      </div>
    </div>
  );
}

function Activities() {
  return (
    <>
      <h1>
        <span id="act-title">Activities</span>
      </h1>
      <div id="activity-container">
        <div className="activity">
          <figure id="gingerbreadevent-figure">
            <img
              src={gingerbreadevent}
              id="gingerbreadevent-img"
              alt="gingerbreadevent"
            />
            <figcaption>
              A gingerbread house making event hosted by my mentor group and I
            </figcaption>
          </figure>
          <div className="activity-desc">
            <strong>
              <span className="activities-title">Peer Mentoring</span>
            </strong>
            <p>Aug 2022 - Present</p>
            <p>
              ● Plan and facilitate activities/events for mentees; events have a
              total 120+ participants overall.
            </p>
            <p>
              ● Coach three mentees on a weekly basis offering general academic
              advice in computer science curriculum to enhance their focus and
              development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <h1 id="experience-title">Experiences</h1>

      <div id="experience-container">
        <div className="experience">
          <figure id="presentation-figure">
            <img
              id="presentation"
              src={capitalone}
              alt="Capital one richmond location"
            />
            <figcaption>Capital One Intern Summit</figcaption>
          </figure>
          <div className="experience-desc">
            <strong className="strong-title">
              <span className="experience-title">Software Engineer Intern</span>
            </strong>
            <p>
              • Optimized the software approval process, empowering{" "}
              <strong>10,000+</strong> users with self-service lifecycle and
              reducing engineering hours by <strong>40%</strong>.
            </p>
            <p>
              • Integrated self-service lifecycle management into the API using
              GO and PostgreSQL, hosted via AWS Lambda and Aurora.
            </p>
            <p>
              • Spearheaded UI developed using TypeScript and React, creating
              flexible and customizable self-service lifecycle, deployed via
              serverless UI hosted on AWS S3.
            </p>
            <p>
              • Implemented testing strategies using Vitest, Cypress, and
              Testify, writing <strong>87</strong> unit and E2E tests increasing
              overall test coverage by <strong>253%</strong>.
            </p>
          </div>
        </div>
        <div className="experience">
          <figure id="presentation-figure">
            <img id="presentation" src={lab} alt="Lab picture from TA" />
            <figcaption>Teaching Assistant Recitation</figcaption>
          </figure>
          <div className="experience-desc">
            <strong className="strong-title">
              <span className="experience-title">Teaching Assistant</span>
            </strong>
            <p>
              • Prepare and conduct weekly recitations for over 30 students in
              the course Introduction to Data Structures and Algorithm.
            </p>
            <p>
              • Host office hours to assist students with their assignments and
              general concepts.
            </p>
          </div>
        </div>
        <div className="experience">
          <figure id="presentation-figure">
            <img
              id="presentation"
              src={google}
              alt="google spring presentation"
            />
            <figcaption>Final pitch presentation (Left: Me)</figcaption>
          </figure>
          <div className="experience-desc">
            <strong className="strong-title">
              <span className="experience-title">
                Application Design Sprint
              </span>
            </strong>
            <p>
              • Collaborated with a team of five to design and prototype a
              product using Figma that won the Google Design Sprint
              best-executed award.
            </p>
            <p>
              • Optimized the design process using CUJ (Critical User Journey)
              and wireframing, which increased the efficiency of the team by
              30%.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <h1 id="project-section">Project</h1>
      <div id="project-container">
        <div className="project">
          <div className="icon-container">
            <p className="icon">📊</p>
          </div>
          <div className="project-shortdesc">
            <p className="project-title">
              <strong>Data Inference Visualizer</strong>
            </p>
            <p>
              {" "}
              A data and stat visualizer/analyzer of state congressional
              districts and precincts. Include resident demopgrahic and economic
              analysis.
            </p>
            <p>Sep/2024 - Dec/2025</p>
            <div className="tools">
              <p>
                <i>Typescript</i>
              </p>{" "}
              <img alt="typscript icon" src={typescript} /> <p>|</p>
              <p>
                <i>React</i>
              </p>{" "}
              <img alt="react icon" src={react} /> <p>|</p>
              <p>
                <i>Chakra UI</i>{" "}
              </p>{" "}
              <img alt="chakra ui icon" src={chakraui} /> <p>|</p>
              <p>
                <i>Java</i>{" "}
              </p>{" "}
              <img alt="java icon" src={java} /> <p>|</p>
              <p>
                <i>SpringBoot</i>{" "}
              </p>{" "}
              <img alt="springboot icon" src={springboot} /> <p>|</p>
              <p>
                <i>MongoDB</i>{" "}
              </p>{" "}
              <img alt="mongodb icon" src={mongodb} /> <p>|</p>
              <p>
                <i>Redis</i>{" "}
              </p>{" "}
              <img alt="redis icon" src={redis} /> <p>|</p>
              <p>
                <i>Git</i>
              </p>{" "}
              <img alt="git icon" src={git} />
            </div>
            <p>
              • Cut map load time by <strong>3s</strong> and panning/zooming by{" "}
              <strong>1s</strong> by switching from React-Simple-Map to native
              Leaflet Library, improving user experience.
            </p>
            <p>
              • Eliminated API latency by implementing Redis Cache in Spring
              Boot, achieving a <strong>100%</strong> performance improvement.
            </p>
            <p>
              • Designed database schema, populated MongoDB with preprocessed
              data, and developed a Java Spring Boot backend to serve optimized
              visualizer API responses.
            </p>
          </div>
          <div className="github-link">
            <a href="https://github.com/zhibin-wang09/Eco-Analyzer">
              <img
                className="link-icon"
                src={logo}
                alt="github logo"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>
        </div>
        <div className="project">
          <div className="icon-container">
            <p className="icon">🃏</p>
          </div>
          <div className="project-shortdesc">
            <p className="project-title">
              <strong>Speedy Poker</strong>
            </p>
            <p>
              {" "}
              A poker game designed to test the player's reaction speed and
              simple math subtraction and addition.
            </p>
            <p>Jan/2024 - Feb/2025</p>
            <div className="tools">
              <p>
                <i>Typescript</i>
              </p>{" "}
              <img alt="typscript icon" src={typescript} /> <p>|</p>
              <p>
                <i>Socket.io</i>{" "}
              </p>{" "}
              <img alt="socket io icon" src={socketio} /> <p>|</p>
              <p>
                <i>React</i>
              </p>{" "}
              <img alt="react icon" src={react} /> <p>|</p>
              <p>
                <i>Framer Motion</i>{" "}
              </p>{" "}
              <img alt="framer motion icon" src={framermotion} /> <p>|</p>
              <p>
                <i>Chakra UI</i>{" "}
              </p>{" "}
              <img alt="chakra ui icon" src={chakraui} /> <p>|</p>
              <p>
                <i>Git</i>
              </p>{" "}
              <img alt="git icon" src={git} />
            </div>
            <p>
              • Designed and developed a dynamic UI using TypeScript, Chakra UI,
              and Framer Motion, creating an interactive and responsive poker
              game with smooth animations.
            </p>
            <p>
              • Built a real-time responsive server with Socket.io, handling
              multiplayer synchronization, game state management, and real-time
              communication between players.
            </p>
          </div>
          <div className="github-link">
            <a href="https://github.com/zhibin-wang09/Speedy-Poker">
              <img
                className="link-icon"
                src={logo}
                alt="github logo"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>
        </div>
        <div className="project">
          <div className="icon-container">
            <p className="icon">🔐</p>
          </div>
          <div className="project-shortdesc">
            <p className="project-title">
              <strong>Cryptocurrency Trade Monitor</strong>
            </p>
            <p>
              A command line interface that monitors Cryptocurrency Exchanges
            </p>
            <p>Apr/2023</p>
            <div className="tools">
              <p>
                <i>C</i>
              </p>{" "}
              <img alt="c icon" src={c} /> <p>|</p>
              <p>
                <i>CLI (Command Line Interface)</i>{" "}
              </p>
              <img alt="cli icon" src={cli} /> <p>|</p>
              <p>
                <i>Linux</i>
              </p>{" "}
              <img alt="linux icon" src={linux} /> <p>|</p>
              <p>
                <i>Git</i>
              </p>{" "}
              <img alt="git icon" src={git} /> <p>|</p>
            </div>
            <p>
              • Programmed a multi-process command line interface program to
              monitor multiple ongoing trades.
            </p>
            <p>
              • Implemented low-level system signals, non-blocking IO, and
              read/write pipes for inter-process communication.
            </p>
          </div>
          <div className="github-link">
            <a href="https://github.com/zhibin-wang09/C-Project">
              <img
                className="link-icon"
                src={logo}
                alt="github logo"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="icon-container">
            <p className="icon">📝</p>
          </div>
          <div className="project-shortdesc">
            <p className="project-title">
              <strong>Post-It</strong>
            </p>
            <p>A note taking chrome extension</p>
            <p>Dec/2022 - Jan/2023</p>
            <div className="tools">
              <p>
                <i>Node.js</i>
              </p>{" "}
              <img alt="javascript icon" src={js} /> <p>|</p>
              <p>
                <i>Express.js</i>{" "}
              </p>{" "}
              <img alt="express icon" src={express} /> <p>|</p>
              <p>
                <i>React.js</i>
              </p>{" "}
              <img alt="react icon" src={react} /> <p>|</p>
              <p>
                <i>Mongodb</i>
              </p>{" "}
              <img alt="mongodb icon" src={mongodb} /> <p>|</p>
              <p>
                <i>HTML</i>
              </p>{" "}
              <img alt="html icon" src={html} /> <p>|</p>
              <p>
                <i>CSS</i>
              </p>{" "}
              <img alt="css icon" src={css} /> <p>|</p>
              <p>
                <i>Git</i>
              </p>{" "}
              <img alt="git icon" src={git} />
            </div>
            <p>
              • Developed a full-stack Chrome extension that enables note-taking
              on websites, leading to a 20% improvement in study efficiency.
            </p>
            <p>
              • Designed and built RESTful API with express.js to operate on
              MongoDB database with React as the frontend.
            </p>
            <p>
              • Improved security by integrating authorization and
              authentication protocol into the application using JWT (JSON Web
              Token).
            </p>
          </div>
          <div className="github-link">
            <a href="https://github.com/zhibin-wang09/Post-It">
              <img
                className="link-icon"
                src={logo}
                alt="github logo"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Greeting() {
  return (
    <>
      <div id="greeting-container">
        <h1 id="greeting">
          Hey 👋, I'm <span id="name">Zhi Bin</span>
        </h1>
        <h5 id="description">
          I am a computer science student from Stony Brook University. <br /> I
          am passionate about developing softwares that could influence millions
          positively.
        </h5>
      </div>
    </>
  );
}

function Base() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "G-M813M65THV",
    };
    TagManager.initialize(tagManagerArgs);
  });
  return (
    <>
      <div id="info">
        <div id="header-container">
          <p>
            <a href="#footer-contact" id="contact-link">
              contact
            </a>
          </p>
        </div>
        <Greeting />
        <Experience />
        <Projects />
        <Activities />
        <Contact />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Base />);
