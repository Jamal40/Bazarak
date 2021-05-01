import React, { Component } from "react";
// import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import "./lower-card.css";

export default class Lowercard extends Component {
  render() {
    return (
      <div className="Lower-card">
        <img class="profile" src={this.props.imageUrl} alt="person" />
        <h4>{this.props.Name}</h4>
        {/* <!-- <p>Lorem ipsum dolor sit</p>
      <p>amet , consectetur</p>
      <p>adipisicing elit.sed diam !</p> --> */}
        <div className="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p>
          Lorem ipsum dolor sit amet , consectetur adipisicing elit.sed diam
        </p>
      </div>
    );
  }
}
