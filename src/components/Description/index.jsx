import React from 'react';
import './style.css';
import Image from './../Image';
import birdsData from './../../data/birdsData';
import AudioPlayer from 'react-h5-audio-player';


function Descrition(props) {

  let chosenItem = props.choise || '-1';
  
  if (chosenItem === '-1') {
    return (
      <div className = 'description'>
        <p>Послушайте плеер, выберите птицу из списка.</p>
      </div>
    )
  } else {

    const { audio, image, name, species, description } = birdsData[props.level][chosenItem];

    return (
      <div className = 'description'>
        <Image 
          className='description__image'
          url = {image}
        />
        <div className = 'description__name'>
          <div>{name}</div>
          <hr/>
          <div>{species}</div>
        </div>
        <AudioPlayer     
          src = {audio}
          showJumpControls = { false }
          autoPlayAfterSrcChange = { false }
        />
        <p className = 'description__text'>{ description }</p>
      </div>
    )
  }
}

export default Descrition;