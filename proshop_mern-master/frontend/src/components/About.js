import React, { Component } from 'react';
import axios from 'axios';

export default class About extends Component {
  constructor(props) {
    super(props);

  }
 

  render() {
    return (
      <div className="abut">
        
        <h1 className="h-about"><span className="h-about2"> About Page :-</span></h1>
        <div className="t-about">
        <h3 class="t-about">Royal Luxury Gift Specializing in Masterpieces detailed on :</h3>
        <h4 class="t-about">Innovation, heritage, creativity and creativity are distinctive and unique features, and he specializes in displaying luxury precious gifts.</h4>
          
          
        </div>
      </div>
    )
  }
}

