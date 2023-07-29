import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import logo from './img/github.png'
import google from './img/googlesprint.jpg'
import aot from './img/AMERICAONTECH.png'
import linkedinlogo from './img/linkedin.png'
import gingerbreadevent from './img/Gingerbreadevent.png'
import link from './img/icons8-linking-32.png'
import java from './tool_icons/java.png'
import springboot from './tool_icons/springboot.png'
import postgresql from './tool_icons/postgresql.png'
import git from './tool_icons/git.png'
import c from './tool_icons/C.png'
import linux from './tool_icons/linux.png'
import cli from './tool_icons/cli.png'
import js from './tool_icons/nodejs.png'
import html from './tool_icons/html.png'
import css from './tool_icons/css.png'
import react from './tool_icons/react.png'
import express from './tool_icons/expressjs.png'
import mongodb from './tool_icons/mongodb.png'
import bootstrap from './tool_icons/bootstrap.png'

function Contact(){
  return(
    <div id ="footer-contact">
      <h1>Get in touch</h1>
      <p>I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn! :)</p>
      <p><a href="mailto:zhib.wang09@gmail.com">zhib.wang09@gmail.com</a></p>
      <div id="footer-icon-link">
        <a href="https://github.com/zhibin-wang09" target="_blank" rel="noopener noreferrer"><img className = "link-icon" src={logo} alt="github logo"/></a>
        <a href="https://www.linkedin.com/in/zhi-bin-wang-62996a22b/" target="_blank" rel="noopener noreferrer"><img id="linkedinlogo" src={linkedinlogo} alt="linkedin logo"/></a>
      </div>
    </div>
  )
}

function Activities(){
  return(
    <>
      <h1><span id="act-title">Activities</span></h1>
      <div id="activity-container">
        <div className="activity">
          <figure id="gingerbreadevent-figure">
            <img src={gingerbreadevent}  id='gingerbreadevent-img' alt='gingerbreadevent'/>
            <figcaption>A gingerbread house making event hosted by my mentor group and I</figcaption>
          </figure>
          <div className='activity-desc'>
            <strong><span className='activities-title'>Peer Mentoring</span></strong>
            <p>Aug 2022 - Present</p>
            <p>● Plan and facilitate activities/events for mentees; events have a total 120+ participants overall.</p>
            <p>● Coach three mentees on a weekly basis offering general academic advice in computer science curriculum to
enhance their focus and development.</p>
          </div>
        </div>
      </div>
    </>
  )
}

function Experience(){
  return(
    <>
    <h1 id="experience-title">Experiences</h1>
    <div id="experience-container">
      <div className='experience'>
        <figure id="presentation-figure">
          <img id="presentation" src={google} alt="google spring presentation"/>
          <figcaption>Final pitch presentation (Left: Me)</figcaption>
        </figure>
        <div className='experience-desc'>
          <strong className='strong-title'><span className='experience-title'>Google Design Sprint</span></strong>
          <p>● Collaborated with a team of five to design and prototype a product using Figma that won the Google Design Sprint best-executed award.</p>
          <p>● Optimized the design process using CUJ (Critical User Journey) and wireframing, which increased the efficiency of the team by 30%.</p>
        </div>
      </div>
      <div className='experience'>
        <figure id="america-on-tech-figure">
          <img src={aot} id="aot-img" alt='America on tech certificate'/>
          <figcaption>Graduating from the program</figcaption>
        </figure>
        <div className='experience-desc'>
          <strong className='strong-title'><span className='experience-title'>American On Tech TECH360 Intern</span></strong>
          <p>Feb 2020 - May 2020</p>
          <a href="https://video-games-store.zhibinbin.repl.co">See project</a>
          <p>● Played a key role on a four person team to create an encoded web page using website development fundamentals.</p>
          <p>● Focused on developing knowledge and expertise in HTML, CSS, and Bootstrap.</p>
        </div>
      </div>

    </div>
    </>
  )
}

function Projects(){
  return(
    <>
    <h1 id="project-section">Project</h1>
    <div id="project-container">
    <div className='project'>
      <div className='icon-container'>
        <p className='icon'>🎹</p>
      </div>
      <div className='project-shortdesc'>
        <p className='project-title'>Beat Mixer</p>
        <p> A desktop beat maker application that allows the user to be creative with music</p>
        <p>Jun/2023 - Present</p>
        <div className='tools'>
          <p><i>Java</i></p> <img alt='java icon' src={java}/> <p>|</p>
          <p><i>Java SpringBoot</i> </p> <img alt='sprig boot icon' src={springboot}/> <p>|</p>
          <p><i>Java Swing</i></p> <p>|</p>
          <p><i>PostgreSQL</i></p> <img alt= 'postgresql icon' src ={postgresql}/> <p>|</p>
          <p><i>Git</i></p> <img alt='git icon' src={git}/>
        </div>
        <p>• Developed a desktop GUI(Graphical User Interface) application using Java Swing framework to assist user with
          playing, and mixing audio files. </p>
        <p>• Building RESTful API with Java Spring Boot framework to handle incoming data and communicate with the
          PostgreSQL database.</p>
      </div>
      <div className='github-link'>
          <a href="https://github.com/zhibin-wang09/MyGrooveFusion"><img className = "link-icon" src={logo} alt="github logo" target='_blank' rel="noopener noreferrer"/></a>
      </div>
    </div>
    <div className="project">
        <div className="icon-container">
          <p className='icon'>🔐</p>
        </div>
        <div className="project-shortdesc">
          <p className='project-title'><strong>Cryptocurrency Trade Monitor</strong></p>
          <p>A command line interface that monitors Cryptocurrency Exchanges</p>
          <p>Apr/2023</p>
          <div className='tools'>
            <p><i>C</i></p> <img alt='c icon' src={c}/> <p>|</p>
            <p><i>CLI (Command Line Interface)</i> </p><img alt='cli icon' src={cli}/> <p>|</p>
            <p><i>Linux</i></p> <img alt= 'linux icon' src ={linux}/> <p>|</p>
            <p><i>Git</i></p> <img alt='git icon' src={git}/> <p>|</p>
          </div>
          <p>• Programmed a multi-process command line interface program that enable users to monitor multiple ongoing trades while processing and storing relevant information.</p>
          <p>• Implemented low level system signals, non-blocking IO, and read/write pipes to enable inter-process communication.</p>
        </div>
        <div className='github-link'>
          <a href="https://github.com/zhibin-wang09/C-Project"><img className = "link-icon" src={logo} alt="github logo" target='_blank' rel="noopener noreferrer"/></a>
        </div>
      </div>
      
      <div className="project">
        <div className="icon-container">
          <p className='icon'>📝</p>
        </div>
        <div className="project-shortdesc">
          <p className='project-title'><strong>Post-It</strong></p>
          <p>A note taking chrome extension</p>
          <p>Dec/2022 - Jan/2023</p>
          <div className='tools'>
            <p><i>Node.js</i></p> <img alt='javascript icon' src={js}/> <p>|</p>
            <p><i>Express.js</i> </p> <img alt='express icon' src={express}/> <p>|</p>
            <p><i>React.js</i></p> <img alt='react icon' src={react}/> <p>|</p>
            <p><i>Mongodb</i></p> <img alt= 'mongodb icon' src ={mongodb}/> <p>|</p>
            <p><i>HTML</i></p> <img alt='html icon' src={html}/> <p>|</p>
            <p><i>CSS</i></p> <img alt='css icon' src={css}/> <p>|</p>
            <p><i>Git</i></p> <img alt='git icon' src={git}/>

          </div>
          <p>• Developed a full stack chrome extension tool that enables convenient note-taking on any website, leading to a 20% improvement in study efficiency.</p>
          <p>• Depoyed REST API with express.js to allow C.R.U.D (Create, Read, Update, Delete) operations on user inputs in the MongoDB database with React as the frontend.</p>
          <p>• Integrated authorization and authentication methods into the application using JWT(JSON Web Token) to make the application more secure.</p>
        </div>
        <div className='github-link'>
          <a href="https://github.com/zhibin-wang09/Post-It"><img className = "link-icon" src={logo} alt="github logo" target='_blank' rel="noopener noreferrer"/></a>
        </div>
      </div>
      <div className='project'>
        <div className='icon-container'>
          <p className='icon'>🎮</p>
        </div>
        <div className="project-shortdesc">
          <p className='project-title'><strong>Nightview Video Game</strong></p>
          <p>Video Game Online Store</p>
          <p>Feb/2020 - May/2020</p>
          <div className='tools'>
            <p><i>HTML</i></p> <img alt='html icon' src={html}/> <p>|</p>
            <p><i>CSS</i> </p><img alt='css icon' src={css}/> <p>|</p>
            <p><i>Bootstrap</i></p> <img alt= 'bootstrap icon' src ={bootstrap}/>
          </div>
          <p>• Collaborated with fellow America On Tech Students to create the encoded website.</p>
          <p>• Implemented using HTML, CSS, and Bootstrap to create user interface.</p>
        </div>
        <div className='github-link'>
          <a href="https://video-games-store.zhibinbin.repl.co"><img className = "link-icon" src={link} alt="link" target='_blnak' rel="noopener noreferrer"/></a>
        </div>
      </div>
    </div>
    </>
    
  )
}


function Greeting(){
  return (
    <>
    <div id="greeting-container">
      <h1 id="greeting">Hey 👋, I'm <span id="name">Zhi Bin</span></h1>
      <h5 id="description">I am a computer science student from Stony Brook University. <br/>  I am passionate about developing softwares that could influence millions positively.</h5>
    </div>
    </>
    
  )
}

function Circles(){
  return (
    <section id='animatedbackground'>
      <ul className='circles'>
      <li className = 'blue'></li>
      <li className = 'blue'></li>
      <li className = 'blue'></li>
      <li className = 'blue'></li>
      <li className = 'blue'></li>
      <li className = 'blue'></li>
      <li className = 'blue'></li>
      <li className = 'blue'></li>
      <li className = 'blue'></li>
      <li className = 'blue'></li>
    </ul>
    </section>
  )
}


class Base extends React.Component{
  render(){
    return(
      <>
        <div id="info">
          <div id="header-container">
            <p><a href="#footer-contact" id="contact-link">contact</a></p>
          </div>
          <Greeting/>
          <Projects/>
          <Experience/>
          <Activities/>
          <Contact/>
          <Circles/>
        </div>
        
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Base/>)