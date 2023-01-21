import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import logo from './github.png'

function Experience(){
  return(
    <>
    <h1 id="experience-title">Experience</h1>
    <div>

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
      <h1 id="greeting">Hey, 👋 I'm <span id="name">Zhi Bin</span></h1>
      <h5 id="description">I am a computer science student from Stony Brook University. <br/>  I am passionate about developing softwares that could change lives.</h5>
    </div>
    </>
    
  )
}

class Base extends React.Component{
  render(){
    return(
      <>
        <Greeting/>
        <Projects/>
        <Experience/>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Base/>)