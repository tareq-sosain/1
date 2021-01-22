import React, { Component } from 'react';
import axios from 'axios';

export default class News extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        
        <h1 className="h-new"> <span className="s-new"></span> News</h1>
        <div className="t-about">
        <h3 class="t-about">Royal Luxury Gift Specializing in Masterpieces detailed on :</h3>
        <h4 class="t-about">Innovation, heritage, creativity and creativity are distinctive and unique features, and he specializes in displaying luxury precious gifts.</h4>
      <img className="img-news" src="https://i.postimg.cc/br00P3DH/g56a2275-1.jpg" alt=""/>
          
          
        </div>
      </div>
    )
  }
}

