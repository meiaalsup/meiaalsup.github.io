import React from 'react';
import './Home.css';
import HomeData from './data/HomeData';

const Now = ({item}) => (
  <li className="about"> {item} </li>
  
)

export default function Home() {
  
  const now = HomeData.filter(
    ({show}) => show
  ).map(
    ({item}, i) => <Now item={item} key={i}/>
  );


  return (
    <div className="Home">
      <div className="paragraph content"> 
        {` Hi, I'm Meia. I am currently: `}
        <ul> {now} </ul>
      </div>
      <div className="paragraph content">
        {` 
        I am broadly interested in distributed systems, machine learning, optimization, and sustainability. I love meeting new people - feel free to drop a line!
        `}
      </div>
    </div>
  );
}

