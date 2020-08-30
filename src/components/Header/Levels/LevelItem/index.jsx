import React from 'react';
import "./style.css";

function LevelItem(props) {
  
  if(props.level === props.number) {
    return <li className='item active'>{props.title}</li>
  } else {
    return <li className='item'>{props.title}</li>
  }
}

export default LevelItem;