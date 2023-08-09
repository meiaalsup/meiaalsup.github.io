import React from 'react';
import {
  NavLink,
  BrowserRouter,
} from "react-router-dom";

import './App.css';
import NavContent from './NavContent'
import Icon from './Icon'
import meia from './assets/profile.png'


export default function App() {
  return (
    <BrowserRouter><nav>
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
              <div className="text-top">
                <div className="nameheader">
                  <div className="header">
                    <NavLink className="nav" to="/">
                      <h1> Meia Alsup </h1>
                    </NavLink>
                  </div>
                  <div className="header">
                    <NavLink className="nav" to="/">
                      <h2> Co-Founder @ Feanix Bio </h2>
                    </NavLink>
                  </div>
                  <div className="header">
                    <p id="email"> [firstname].[lastname]@gmail.com </p>
                  </div>
                  <div className="header location">
                    <div className="iconBoxWrapper">
                      <div className="iconBox">
                        <i className="fas fa-map-marker-alt iconinside"></i>
                      </div>
                    </div>
                    <div id="locationtag">Bay Area | Boston</div>
                  </div>
                </div>
                <Icon/>
              </div>
            </div>
          </header>
        </div>
        <NavContent/> 
      </div>
    </nav></BrowserRouter>
  );
}



