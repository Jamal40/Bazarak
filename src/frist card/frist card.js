import React, { Component } from "react";
// import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import "./frist card.css";

export default class Fristcard extends Component {
  render() {
    return (
      <>
        <h1>find Bazar by country </h1>
        <div className="frist">
          <div class="circle-icon-contianer">
            <p>
              <i class="fas fa-chevron-left"></i>
            </p>
          </div>
          <div className="one1">International </div>
          <div className="two2">Qatar</div>
          <div className="three3">Saudi Arabia</div>
          <div className="four4">Kuwait</div>
          <div class="circle-icon-contianer">
            <p>
              <i class="fas fa-chevron-right"></i>
            </p>
          </div>
        </div>
      </>
    );
  }
}
