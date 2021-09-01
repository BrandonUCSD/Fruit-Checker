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
      highlightedFruitName: '',
      highlightedFruitPic: '',
      hightlightedFruitInfo: '',

    };

    this.getFruits = this.getFruits.bind(this);
    this.highlightFruit = this.highlightFruit.bind(this);
  }

  componentDidMount() {
    this.getFruits();
  }
  // **TODO** FIX AXIOS GET REQUEST for fruits DUE TO CORS POLICY

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
    // const apiCall = fruitAPI.concat(fruitName);
    // axios.get(apiCall)
    //   .then(console.log)
    //   .then((res) => {
    //     this.setState({
    //       highlightedFruit: true,
    //       hightlightedFruitInfo: res
    //     })
    //   })
    console.log('this works');
    this.setState({
      highlightedFruitName: fruitName,
      highlightedFruitPic: fruitPic,
      highlightedFruit: !this.state.highlightedFruit,
    })

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
              fruitName={this.state.highlightedFruitName}
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

const Examplefruits = [
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apple.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apricot.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/banana.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/blueberry.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/cherry.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/guava.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/lemon.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/mango.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/orange.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/pear.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/pineapple.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/raspberry.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/strawberry.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/tomato.png",
  "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/watermelon.png"
];

const getFruitNames = (links) => {
  return links.map(link => {
      let regx = /^(.+)\/([^\/]+).png$/;
      return link.match(regx)[2];
  })
};