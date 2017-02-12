import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import logo from './assets/logo-light.svg';
import './App.css';
import pressMashable from './assets/img/press-mashable.svg'
import pressVice from './assets/img/press-vice.svg'
import pressPolitico from './assets/img/press-politico.svg'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <nav className="navbar">
          <img className="logo" src={logo} alt="Amplify AI" />
          <a href="mailto:amplifyai@gmail.com">Contact Us</a>
        </nav>

        <section className="header-container">
          <h1 className="header">
            Engage your audience on Facebook
          </h1>
          <h3 className="subheader">
            Monetize and engage your audience with a personalized chatbot for Facebook Messenger.
          </h3>
          <a className="btn-start">
            Get Started
          </a>
        </section>

        <section className="press-container">
          {/* <h2>
            FEATURED IN
          </h2> */}
          <div className="press-images">
            <a className="press-img" href="http://mashable.com/2017/02/08/facebook-bot-trump-protests-webot" target="_blank">
              <img src={pressMashable} alt="Mashable" />
            </a>
            <a className="press-img" href="" target="_blank">
              <img src={pressVice} alt="Vice" />
            </a>
            <a className="press-img" href="" target="_blank">
              <img src={pressPolitico} alt="Politico" />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
