import React from 'react';
import "./style.css";
import Score from './Score';
import Levels from './Levels';
import Logo from './Logo';

function Header(props) {

  const level = props.level;
  const currentScore = props.currentScore;

  return (
    <div className = 'header'>
      <div className = 'header-top'>
        <Logo/>
        <Score currentScore = { currentScore }/>
      </div>
      <Levels level = { level }/>
    </div>
  );
}

export default Header;