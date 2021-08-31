import React from 'react';

export default function FruitListEntry(props) {
  return (
    <li className='content__card'>
    <div className='image__container'>
      <img
        src={props.fruitPic}
        alt={props.fruitName}
        width="100%"
        height="100%"
      >
      </img>
    </div>
    <p>{props.fruitName}</p>
  </li>
  )
};