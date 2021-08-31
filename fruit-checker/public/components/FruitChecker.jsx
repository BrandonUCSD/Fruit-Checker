import React, { Component } from 'react';
import axios from 'axios';

import FruitList from './FruitList.jsx';

export default class FruitChecker extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [],
      fruitNames: [],
    };

    this.getFruits = this.getFruits.bind(this);
  }

  componentDidMount() {
    this.setState( {
      fruits: Examplefruits,
      fruitNames: getFruitNames(Examplefruits)
    })

  }
  // **TODO** FIX AXIOS GET REQUEST for fruits DUE TO CORS POLICY

  getFruits() {
    axios.get('https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/fruit-images.json', {
      headers: {
        'Access-Control-Allow-Origin': true,
      },
      })
      .then(console.log)
      .catch(console.log);
  }

  render() {
    return (
      <>
        <div class='container'>
          <FruitList
            fruits={this.state.fruits}
            fruitNames={this.state.fruitNames}
          />
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
      const url = new URL(link);
      let regx = /^(.+)\/([^\/]+).png$/;
      return link.match(regx)[2];
  })
};