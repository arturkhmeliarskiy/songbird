import React from 'react';
import './style.css';
import Option from './Option';
import birdsData from './../../data/birdsData';

function Answers(props) {
  const items = props.currentState;
  const info = birdsData[props.level];
  const cb = props.cb;
  
  return (
    <div className = "answers" >
      <ul className = "answers__list">
      {
        items.map( (item, index) => {
          const style = {
            backgroundColor: item
          }
          return (
            <Option 
              name = { info[index].name }
              key = { info[index].id }
              line = {'' + index} 
              cb = {cb}
              style = {style}
            />
          )
        })
      }
      </ul>
    </div>
  );
}

export default Answers;