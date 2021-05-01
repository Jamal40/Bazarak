import React, { Component } from "react";
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles'
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import "./logo.css";

export default class Logo extends Component {
  render() {
    return (
      <>
        <div class="footer-logo-container">
          <div class="upper-circle vertical-circle"></div>
          <div class="footer-logo">
            <div class="left-circle horz-circle"></div>
            <p class="text-logo">eBazarak.com</p>
            <div class="right-circle horz-circle"></div>
          </div>
          <div class="lower-circle vertical-circle"></div>
        </div>
      </>
    );
  }
}
