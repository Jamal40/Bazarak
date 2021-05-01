import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

// import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./footer.css";
import Logo from "../logo/logo";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        {/* <ul>
  <li><a href="#section2">about us</a></li>
  <li><a href="#section2">blog</a></li>
  <li><a href="#section2">Q & A</a></li>
  <li><a href="#section2">resources</a></li>
  <li><a href="#section2">contact us</a></li>
</ul> */}
        <div className="logo">
          <Logo />
          <div className="footer-icon">
            <FacebookIcon className="footer-icon fb" />
            <TwitterIcon className="footer-icon tw" />
            <InstagramIcon className="footer-icon insta" />
          </div>
        </div>
        <div className="Quick-links">
          <h3>Quick links </h3>
          <p>
            {" "}
            <ArrowRightIcon className="arrow" fontSize="large" />{" "}
            <a href="#section2">about us</a>{" "}
          </p>
          <p>
            <ArrowRightIcon className="arrow" fontSize="large" />{" "}
            <a href="#section2">blog</a>{" "}
          </p>
          <p>
            <ArrowRightIcon className="arrow" fontSize="large" />{" "}
            <a href="#section2">Q & A </a>{" "}
          </p>
          <p>
            <ArrowRightIcon className="arrow" fontSize="large" />{" "}
            <a href="#section2">resources </a>{" "}
          </p>
          <p>
            <ArrowRightIcon className="arrow" fontSize="large" />{" "}
            <a href="#section2">contact us </a>{" "}
          </p>
        </div>

        <div className="links">
          <h3>Custom links </h3>
          <p>
            <ArrowRightIcon className="arrow" fontSize="large" />{" "}
            <a href="#section2">terms of service</a>{" "}
          </p>
          <p>
            <ArrowRightIcon className="arrow" fontSize="large" />{" "}
            <a href="#section2">privacy policy</a>{" "}
          </p>
          <p>
            <ArrowRightIcon className="arrow" fontSize="large" />{" "}
            <a href="#section2">accessibility </a>{" "}
          </p>
        </div>

        <div className="News">
          <h3>News letter </h3>
          <p className="p">
            {" "}
            you can get the latest updates by subscribing our newsletter{" "}
          </p>
          <div className="box">
            <form>
              <input
                className="text-input"
                type="text"
                placeholder="james1990@Gmail.com"
                required
              ></input>
              <input className="sub" type="submit" value="subscribe" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
