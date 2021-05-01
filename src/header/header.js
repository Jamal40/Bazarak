import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./header.css";

function Header() {
  return (
    <>
      <div className="header-white">
        <p class="text-header">eBazarak.com</p>

        <Button variant="contained" color="primary" href="#contained-buttons">
          login
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Register
        </Button>
        <div className="p-head">
          {" "}
          <img
            className="flag"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/320px-Flag_of_the_United_Kingdom.svg.png"
          />{" "}
          <p>eng </p> <ArrowDropDownIcon />
        </div>
      </div>
      <div class="image-header-container">
        <div class="image-header-content">
          <p class="header-content-text">
            Find the perfect <span class="orange-text">Bazaar</span>
          </p>
          <div class="country-header">
            <div class="inp-cont">
              <span class="loc-logo">
                <i class="fas fa-search"></i>
              </span>
              <input
                class="text-search-header"
                type="text"
                placeholder="I'm looking for..."
              />
            </div>
            <div class="inp-cont">
              <span class="loc-logo">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <select class="header-dropdown">
                <option value="" disabled selected>
                  Country
                </option>
                <option>Algeria</option>
                <option>Egypt</option>
                <option>Saudi Arabia</option>
              </select>
            </div>
            <a class="header-search-btn">
              <i class="fas fa-search"></i>
            </a>
          </div>
          <a class="header-create-btn">Create your Bazaar</a>
        </div>
      </div>
      ‏ ‏
    </>
  );
}
export default Header;
