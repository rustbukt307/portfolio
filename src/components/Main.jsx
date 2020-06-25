import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <div className="body-main">
        <h3>Welcome to my homepage, I hope you like it!</h3>
        <p>I used to work with cars, but now I don't. I got sick of it eventually (work, not cars) and decided to learn code! Isn't that just straight baller? I'm still learning, but I need a job, HELP!</p>

        <h3>Check out some of the work I've done here!</h3>
          <div className="projects">
            <a target='_blank' href='https://pages.git.generalassemb.ly/rustbukt307/monster-manual/' alt="Digital Monster Manual">Digital Monster Manual</a>
            <br/>
            <img src={require('./images/dmm.png')} />
            <p>A simple digital version of the famous Monster Manual from the ever-popular Dungeons & Dragons tabletop game. Built with HTML, CSS, and Vanilla JS that accesses an open API for monster data.</p>
          </div>

          <div className="projects">
            <a target='_blank' href='https://rustbukt307-game-collection.netlify.app/' alt="The Player's Vault">The Player's Vault</a>
            <br/>
            <img src={require('./images/tpv.png')} />
            <p>Built to provide information on a wide variety of video game titles and allows the user to save their favorites to a list! Built with React and styled with CSS and Storybook.</p>
          </div>

          <div className="projects">
            <a target='_blank' href='http://boxed-ux-sei-p3.surge.sh/' alt="Boxed Bulk Cart">Boxed Bulk Cart</a>
            <br/>
            <img src={require('./images/bbc.png')} />
            <p>A replica of an e-commerse page. I personally worked on back-end programming and styling in collaboration with a UI team. Very exciting! Built in React with Express and MongoDB.</p>
          </div>

          <div className="projects">
            <a target='_blank' href='https://rb307-character-manager.netlify.app/' alt="Character Manager">Character Manager</a>
            <br/>
            <img src={require('./images/cm.png')} />
            <p>A companion to the Monster Manual, this full-stack D&D app allows a user to create campaigns and characters within. Featuring working authentication and customization features. Front-end constructed in React, back-end built using Ruby on Rails.</p>
          </div>
      </div>
    );
  }
}

export default Main;