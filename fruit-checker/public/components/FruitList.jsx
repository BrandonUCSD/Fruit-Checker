import React from 'react';
import FruitListEntry from './FruitListEntry.jsx';

export default function FruitList(props) {
  return (
    <ul className='content__container'>
      {props.fruits.map((fruitPic, index) =>
        <FruitListEntry
          fruitPic={fruitPic}
          fruitName={props.fruitNames[index]}
          highlightFruit={props.highlightFruit}
        />
      )}
    </ul>
  )
}