import React from 'react';
import './NavContent.css'
import {
  Route,
  NavLink
} from "react-router-dom";

import Home from './Home'
import Work from './Work'
import Projects from './Projects'
import Teaching from './Teaching'
import Personal from './Personal'

const navItems = [
  {
    name: "work",
    component: <Work/>,
    route: "work",
    show: true,
    isHome: false,
  },
  {
    name: "projects",
    component: <Projects/>,
    route: "projects",
    show: true,
    isHome: false,
  },
  {
    name: "teaching",
    component: <Teaching/>,
    route: "teaching",
    show: true,
    isHome: false,
  },
  {
    name: "personal",
    component: <Personal/>,
    route: "personal",
    show: true,
    isHome: false,
  },
  {
    name: "home",
    component: <Home/>,
    route: "",
    show: true,
    isHome: true,
  },
]


const NavBarItem = ({name, route}) => (
  <div className="tab">
    <NavLink className="nav" to={`/${route}`}>{name}</NavLink>
  </div>
)

const navbar = navItems.filter(
  ({show, isHome}) => show && !isHome
).map(
  ({name, route}, i) => <NavBarItem name={name} route={route} key={i}/>
)



const SwitchItem = ({content, addr}) => {
  return (
    <Route exact path={`/${addr}`} >
      {content}
    </Route>
  );
}

const switches = navItems.filter(
  ({show, isHome}) => show 
).map(
  ({component, route}, i) => {
    return <SwitchItem content={component} addr={route} key={i} />;
  }
)



export default function NavContent() {
  return (
    <div>
      <div className="navbar">
        {navbar}
      </div>
      <div className="PageContent">
        {switches}
      </div>
    </div>
  )
};
