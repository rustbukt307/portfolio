import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="header-main">
        <h1>
          <Link to='/'>Tom Moliterno</Link>
        </h1>
        <h2>
          Software Developer
        </h2>
    </header>
    );
  }
}

export default Header;