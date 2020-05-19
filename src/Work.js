import React from 'react';
import './Work.css';

import WorkData from './data/WorkData';


const WorkExperience = ({name, url, role, time}) => (
  <div className="exp">
    <div className="content role">
      {role}
    </div>
    <div className="content company">
      <a target="_blank" className="workurl" rel="noopener noreferrer" href={url}> {name} </a>
    </div>
    <div className="content time">
      {time}
    </div>
  </div>
)

export default function Work() {
  const works = WorkData.map((props, i) =>
    <WorkExperience {...props} key={i} />
  );
  return (
    <div className="Work">
      <div id="WorkHeader">
        <h4> Work </h4>
      </div>
      {works}
    </div>
  );
}
