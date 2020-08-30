import React from 'react';
import './style.css';
import img from './../../images/problem.png';

function Image(props) {

  if (props.isHidden){
    return (
      <img  className = {`${props.className} image`} src = {img} alt = 'bird'/>
    );
  } else {
    return (
      <img  className = {`${props.className} image`} src = {props.url} alt = 'bird'/>
    );
  }
  
}

export default Image;