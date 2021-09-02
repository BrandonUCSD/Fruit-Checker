import React, { Component } from 'react';

export default class HighlightedFruit extends Component {

  render() {
    return (
      <div>
        <div class='image__container' id='highlighted'>
          <img
            src={this.props.fruitPic}
            alt=''
            width="400px"
            height="400px"
          >
          </img>
        </div>
          <div>
            {Object.keys(this.props.fruitInfo).map((key) => {
              if (typeof this.props.fruitInfo[key] !== 'object') {
                return (
                  <p>{key}: {this.props.fruitInfo[key]}</p>
                )
              } else {
                return (
                  <div>
                    <p>{key}</p>
                    <div>
                      {Object.keys(this.props.fruitInfo[key]).map((innerKey) => {
                        console.log(`${innerKey} : ${this.props.fruitInfo[key][innerKey]}`);
                        return (<p>{innerKey}: {this.props.fruitInfo[key][innerKey]}</p>)
                      })}
                    </div>
                  </div>
                )
              }
            })}
          </div>
      </div>
    )
  }
}