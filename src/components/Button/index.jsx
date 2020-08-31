import React from 'react';
import './style.css';

function Button(props) {

  const divStyleActive = {
    backgroundColor: '#019d77'
  }

  const divStyleDisabled = {
    backgroundColor: '#3d7270'
  }

  return (
    <div className = 'button'
         onClick = { props.cb }
         style = { (props.isActive) ? divStyleActive : divStyleDisabled }> 
    {props.message} 
    </div>
  ); 
}

export default Button;
