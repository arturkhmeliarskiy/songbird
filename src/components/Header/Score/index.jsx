import React from 'react';
import "./style.css";

function Score(props) {

  const currentScore = props.currentScore;

  return (
    <div className = 'score'>
        <span> Score: </span>
        <span className = 'score__counter'>{ currentScore }</span>
    </div>
  );
}

export default Score;