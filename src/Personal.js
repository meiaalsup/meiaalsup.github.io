import React from 'react';
import './Personal.css';
import FunData from './data/FunData'
import BooksData from './data/BooksData'

const Fun = ({item}) => (
  <li> {item} </li>
  
)

const Book = ({title, author, url}) => (
  <li> 
    <div class="book">
      <div class="title">
        <a class="bookurl" target="_blank" rel="noopener noreferrer" href={url}>
          {title}
        </a>
      </div>
      <div class="author"> {author}</div>
    </div> 
  </li>
  
)

export default function Personal() {
  
  const fun = FunData.filter(
    ({show}) => show
  ).map(
    ({item}, i) => <Fun item={item} key={i}/>
  );

  const books = BooksData.filter(
    ({show}) => show
  ).map(
    ({title, author, url}, i) => <Book url={url} title={title} author={author} key={i}/>
  );


  return (
    <div className="Personal">
      <div>
        <h4> Personal </h4>
      </div>
      <div className="paragraph"> 
        {` How I procrastinate: `}
        <ul> {fun} </ul>
      </div>
      <div className="paragraph"> 
        {` Recent Favorite Books: `}
        <ul> {books} </ul>
      </div>
    </div>
  );
}


