import React from 'react';

export default function FruitList(props) {
  return (
    <ul className='content__container'>
    {props.fruits.map((fruit, index) =>
    <li className='content__card'>
      <div className='image__container'>
        <img
          src={fruit}
          alt={props.fruitNames[index]}
          width="100%"
          height="100%"
        >
        </img>
      </div>
      <p>{props.fruitNames[index]}</p>
    </li>
    )}
  </ul>
  )
}