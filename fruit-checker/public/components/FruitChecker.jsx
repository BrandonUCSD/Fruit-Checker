import React, { Component } from 'react';
import axios from 'axios';

import FruitList from './FruitList.jsx';
import HighlightedFruit from './HighlightedFruit.jsx';

export default class FruitChecker extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [],
      fruitNames: [],
      highlightedFruit: false,
      highlightedFruitPic: '',
      hightlightedFruitInfo: '',

    };

    this.getFruits = this.getFruits.bind(this);
    this.highlightFruit = this.highlightFruit.bind(this);
  }

  componentDidMount() {
    this.getFruits();
  }

  getFruits() {
    axios.get('/fruits')
      .then(({data}) => {
        this.setState( {
          fruits: data,
          fruitNames: getFruitNames(data)
        })
      })
      .catch(console.log);
  }

  highlightFruit(fruitName, fruitPic) {
    axios.get(`/hightlightedFruit?fruit=${fruitName}`)
      .then(({data}) => {
        this.setState({
          highlightedFruit: true,
          highlightedFruitPic: fruitPic,
          hightlightedFruitInfo: data
        })
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <div class='container'>
          <FruitList
            fruits={this.state.fruits}
            fruitNames={this.state.fruitNames}
            highlightFruit={this.highlightFruit}
          />
        <section class="content__container">
          {
          this.state.highlightedFruit ?
            <HighlightedFruit
              fruitInfo={this.state.hightlightedFruitInfo}
              fruitPic={this.state.highlightedFruitPic}
            />
          :
            <p>highlighted fruit</p>
          }
        </section>
        </div>
      </>
    )
  }
}

const getFruitNames = (links) => {
  return links.map(link => {
      let regx = /^(.+)\/([^\/]+).png$/;
      return link.match(regx)[2];
  })
};

const fruitInfo = {
  "genus":"Prunus",
  "name":"Apricot",
  "id":35,
  "family":"Rosaceae",
  "order":"Rosales",
  "nutritions":{
    "carbohydrates": 3.9,
    "protein":0.5,
    "fat":0.1,
    "calories":15,
    "sugar":3.2
  }
};

const fruitPic = 'https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apricot.png';