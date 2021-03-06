import React from 'react';
import './style.css';
import Image from './../Image';
import birdsData from './../../data/birdsData';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Question(props) {

  const level = props.level;
  const rightAnswer = props.rightAnswer;
 
  const { audio, image, name } = birdsData[level][rightAnswer];
  
    return (
      <div className = 'question'>
        <Image 
          className = 'question__image'
          url = {image}
          isHidden = { (props.visibility) ? false : true }
        />
        <span className = 'question__name'>{ (props.visibility) ? name : '*******' }</span>
        <AudioPlayer     
          src = {audio}
          showJumpControls = {false}
          autoPlayAfterSrcChange={false}
        />
      </div>
    );
   
    
}

export default Question;
