import React from 'react';

import './Icon.css'
import IconData from './data/IconData.js'

const IconLink = ({name, url, faclass, id}) => (
    <a className="iconSection" target="_blank" rel="noopener noreferrer" href={url} >
      <i className={faclass} id={id}></i>
      <div className="iconlabel">
        {name}
      </div>
    </a>
)


export default function Icon() {
  const icons = IconData.filter(
    ({show}) => show
  ).map((props, i) =>
    <IconLink {...props} key={i} />
  );
  return (
    <div className="media">
      {icons}
    </div>
  );
}
