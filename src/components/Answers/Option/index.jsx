import React from 'react';
import './style.css';

function Option(props) {
  
  const handleClick = props.cb;
  const line = props.line;
  const name = props.name;
  const style = props.style;
  
  return (
   <li className = 'answers__option'  onClick = { () => { handleClick(line) } }>
      <div className = 'answers__flag' style = { style }></div>
      <span className = 'answers__option-name'>{ name }</span>
   </li>
  );
}

export default Option;
