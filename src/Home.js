import React from 'react';
import './Home.css';
import HomeData from './data/HomeData';

const Now = ({ item }) => <li className="about"> {item} </li>;

const now = HomeData.filter(({ show }) => show).map(({ item }, i) => (
  <Now item={item} key={i} />
));

export default function Home() {
  return (
    <div className="Home">
      <div className="paragraph content">
        Hi, I'm Meia. I am currently:
        <ul> {now} </ul>
      </div>
      <div className="paragraph content">
        I am broadly interested in agriculture, sustainability, plant based
        foods, machine learning and distributed systems. I love meeting new
        people - feel free to drop a line!
      </div>
    </div>
  );
}
