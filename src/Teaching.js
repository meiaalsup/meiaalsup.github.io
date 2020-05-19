import React from 'react';
import './Teaching.css';

import TeachingData from './data/TeachingData';

const Coursename {
  if (url.length > 0) {
    return (
      <a target="_blank" className="courseurl" rel="noopener noreferrer" href={url}>
        {course}
      </a>
    );
  } else {
    return (
      {course}
    );
  }
};


function TeachingExperience({course, institution, url, role, time}) {
  return (
    <div className="teaching">
      <div className="content role">
        {role}
      </div>
      <div className="content course">
        <Coursename url="url" course="course"/>
      </div>
      <div className="content institution">
        {institution}
      </div>
      <div className="content time">
        {time}
      </div>
    </div>
  )
}

export default function Teaching() {
  const teaching = TeachingData.map((props, i) =>
    <TeachingExperience {...props} key={i} />
  );
  return (
    <div className="Teaching">
      <div id="TeachingHeader">
        <h4> Teaching </h4>
      </div>
      <div>{teaching}</div>
    </div>
  );
}
