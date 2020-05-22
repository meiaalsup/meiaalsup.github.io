import React from 'react';
import './Projects.css';

import ProjectsData from './data/ProjectsData';

const Projectname = ({url, name}) => {
  if (url.length > 0) {
    return (
      <a target="_blank" className="projecturl" rel="noopener noreferrer" href={url}>
        {name}
      </a>
    );
  } else {
    return (
      name
    );
  }
};


function Project({name, description, association, tech, url, time}) {
  return (
    <div className="project">
      <div className="projectrow">
        <div className="content name">
          <Projectname url={url} name={name}/>
        </div>
        <div className="content association">
          {association}
        </div>
        <div className="content time">
          {time}
        </div>
      </div>
      <div className="projectrow">
        <div className="content description">
          {description}
        </div>
      </div>
      <div className="projectrow">
        <div className="content tech">
          {tech}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const projects = ProjectsData.filter(
    ({show}) => show
  ).map((props, i) =>
    <Project {...props} key={i} />
  );
  return (
    <div className="Projects">
      <div id="ProjectsHeader">
        <h4> Projects </h4>
      </div>
      <div>{projects}</div>
    </div>
  );
}
