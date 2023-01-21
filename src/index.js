import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

class Navbar extends React.Component{
  render(){
    return(
      <div id="Navbar">
        <ul id="Navbar-list">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

function Greeting(){
  return (
    <>
    <div id="greeting-container">
      <h1 id="greeting">Hey, 👋 I'm Zhi Bin</h1>
      <h5 id="description">I am a computer science student at Stony Brook University</h5>
    </div>
    </>
    
  )
}

class Base extends React.Component{
  render(){
    return(
      <>
        <Greeting/>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Base/>)