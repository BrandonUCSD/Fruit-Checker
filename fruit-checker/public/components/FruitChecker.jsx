import React, { Component } from 'react';
import axios from 'axios';

export default class FruitChecker extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [],
    };

    this.getFruits = this.getFruits.bind(this);
  }

  componentDidMount() {
    this.setState( { fruits: Examplefruits })
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
        <section>
          {this.state.fruits.map((fruit, index) =>
          <div>
            <img src={fruit} alt={index} height="500" width="500"></img>
          </div>
          )}
        </section>
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