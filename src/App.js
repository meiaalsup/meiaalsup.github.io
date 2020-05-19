import React from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";


import './App.css';

import NavContent from './NavContent'
import Icon from './Icon'

import meia from './assets/profile.png'


export default function App() {
  return (
    <Router><nav>
      <div className="App">
        <div className="headerbar">
          <header>
            <div className="topbar">
              <div className="image-container">
                <NavLink className="nav" to="/">
                  <img
                    className="image"
                    src={meia} 
                    alt="meia's headshot"
                  />
                </NavLink>
              </div>
              <div className="nameheader">
                <div className="header">
                  <NavLink className="nav" to="/">
                    <h1> Meia Alsup </h1>
                  </NavLink>
                </div>
                <div className="header">
                  <NavLink className="nav" to="/">
                    <h2> MIT M'Eng 2020 </h2>
                  </NavLink>
                </div>
                <div className="header">
                  <p id="email"> [firstname].[lastname]@gmail.com </p>
                </div>
                <div className="header location">
                  <i className="fas fa-map-marker-alt"></i>
                  <div id="locationtag">Boston | Bay Area </div>
                </div>
              </div>
              <Icon/>
            </div>
          </header>
        </div>
        <NavContent/> 
      </div>
    </nav></Router>
  );
}



