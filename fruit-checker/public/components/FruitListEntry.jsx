import React from 'react';

export default function FruitListEntry(props) {
  const highlight = () => {
    props.highlightFruit(props.fruitName, props.fruitPic);
  }

  return (
    <li className='content__card' onClick={() => highlight()}>
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