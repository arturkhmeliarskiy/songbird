import React from 'react';
import "./style.css";
import LevelItem from './LevelItem';
import levelsData from './../../../data/levelsData';

function Levels(props) {
  
  const level = props.level;
  
  return (
    <ul className = 'levels-list'>
      <LevelItem title = {levelsData[0]} level = {level} number = '0'/>
      <LevelItem title = {levelsData[1]} level = {level} number = '1'/>
      <LevelItem title = {levelsData[2]} level = {level} number = '2'/>
      <LevelItem title = {levelsData[3]} level = {level} number = '3'/>
      <LevelItem title = {levelsData[4]} level = {level} number = '4'/>
      <LevelItem title = {levelsData[5]} level = {level} number = '5'/>
    </ul>
  )
}

export default Levels;