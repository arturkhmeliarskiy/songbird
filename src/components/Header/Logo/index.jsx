import React from 'react';
import "./style.css";
import logo from "./../../../images/songbird.png";

function Logo() {
  return <img  className = "logo" src = {logo} alt ="logo"></img>;
}

export default Logo;