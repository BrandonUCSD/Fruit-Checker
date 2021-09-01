import React, { Component } from 'react';

export default class HighlightedFruit extends Component {

  render() {
    return (
        <div class='image__container' id='highlighted'>
          <img
            src={this.props.fruitPic}
            alt=''
            width="400px"
            height="400px"
          >
          </img>
          <p>{this.props.fruitName}</p>
          <p>{this.props.fruitInfo}</p>
        </div>
    )
  }
}