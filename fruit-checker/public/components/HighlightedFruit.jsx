import React, { Component } from 'react';

export default class HighlightedFruit extends Component {

  render() {
    return (
      <div className='content__container highlighted'>
        <div className='image__container' id='highlighted'>
          <img
            src={this.props.fruitPic}
            alt={this.props.fruitInfo.name}
            width="100%"
            height="100%"
          >
          </img>
        </div>
        <div className='highlightInfo'>
          {Object.keys(this.props.fruitInfo).map((key) => {
            if (typeof this.props.fruitInfo[key] !== 'object') {
              return (
                <div className='info__entry'>
                  <b>{key}</b>: <span>{this.props.fruitInfo[key]}</span>
                </div>
              )
            } else {
              return (
                <div className='info__entry'>
                  <b>{key}:</b>
                  <div>
                    {Object.keys(this.props.fruitInfo[key]).map((innerKey) => {
                      return (
                        <div className='inner__entry'>
                          <b>{innerKey}</b>: <span>{this.props.fruitInfo[key][innerKey]}g</span>
                        </div>)
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