import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="header-main">
        <div className='name'>
          {/* <Link to='/'>Tom Moliterno</Link> */}
          <h1>Tom Moliterno</h1>
          <h3 className='title'>Software Developer</h3>
        </div>
        
        <div className='links'>
          <a target='_blank' href='https://resume.creddle.io/resume/me9n8un0bg'>Resume</a>
          <a target='_blank' href='https://github.com/rustbukt307'>GitHub</a>
          <a target='_blank' href='https://www.linkedin.com/in/tommoliterno/'>LinkedIn</a>
          </div>
      </header>
    )
  }
}

export default Header