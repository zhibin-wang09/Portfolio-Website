import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import logo from './img/github.png'
import google from './img/googlesprint.jpg'
import aot from './img/AMERICAONTECH.png'

function Contact(){
  return(
    <div id ="footer-contact">
      <h1>Get in touch</h1>
      <p>I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn! :)</p>
      <a href="zhib.wang09@gmail.com">zhib.wang@gmail.com</a>
    </div>
  )
}

function Activities(){
  return(
    <>
      <h1 id="act-title">Activities</h1>
      <div>

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
          <img id="presentation" src={google}/>
          <figcaption>Final pitch presentation (Left: Me)</figcaption>
        </figure>
        <div className='experience-desc'>
          <strong className='strong-title'><span className='experience-title'>Google Design Sprint</span></strong>
          <p>● Collaborated with a team of 5 to design and prototype a project using Figma that won the best-executed award.</p>
          <p>● Optimized the project using CUJ(Critical User Journey), user profile, and wireframing, which increased the
efficiency of the team by 45%.</p>
        </div>
      </div>
      <div className='experience'>
        <figure id="america-on-tech-figure">
          <img src={aot} id="aot-img"/>
          <figcaption>Graduating from the program</figcaption>
        </figure>
        <div className='experience-desc'>
          <strong className='strong-title'><span className='experience-title'>American On Tech TECH360 Intern</span></strong>
          <p>Feb 2020 - May 2020</p>
          <p>● Focused on developing knowledge and expertise in Coding, HTML, CSS, and Bootstrap.</p>
          <p>● Worked on a team of four to create an encoded web page using the fundamentals of website development.</p>
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
      <div className="project">
        <div className="icon-container">
          <p className='icon'>📝</p>
        </div>
        <div className="project-shortdesc">
          <p className='project-title'><strong>Post-It</strong></p>
          <p>A note taking chrome extension</p>
          <p>• Utilized the React library to build an interface to interact with the REST API.</p>
          <p>• Implemented a REST API to allow C.R.U.D(Create, Read, Update, Delete) operations on user inputs in the
MongoDB database.</p>
        </div>
        <div className='github-link'>
          <a href="https://github.com/zhibin-wang09/Post-It"><img src={logo} alt="github"/></a>
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
      <h5 id="description">I am a computer science student from Stony Brook University. <br/>  I am passionate about developing softwares that could change lives.</h5>
    </div>
    </>
    
  )
}

class Base extends React.Component{
  render(){
    return(
      <>
        <div id="header-container">
          <p><a href="" id="contact-link">contact</a></p>
        </div>
        <Greeting/>
        <Projects/>
        <Experience/>
        <Activities/>
        <Contact/>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Base/>)