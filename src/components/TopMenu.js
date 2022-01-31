import React from 'react';
import { useState } from 'react/cjs/react.development';
import { v4 as uuidv4 } from 'uuid';

export default function TopMenu({ isEditing, setIsEditing, isPlaying, setIsPlaying, audios, setAudios, playingAudioNode, setPlayingAudioNode}) {

  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [linkAlert, setLinkAlert] = useState(false);
  const [linkValidity, setLinkValidity] = useState(false);
  const [nameAlert, setNameAlert] = useState(false);

  function handleLinkChange(event) {
    setLink(event.target.value);
    setLinkAlert(false);
    setLinkValidity(false);
  }

  function handleNameChange(event) {
    setName(event.target.value);
    setNameAlert(false);
  }

  function handleEditing() {
    if (audios == []) {
      return;
    }
    if (playingAudioNode != null) {
      playingAudioNode.pause();
      playingAudioNode.currentTime = 0;
    }

    setIsEditing(!isEditing);
    setPlayingAudioNode(null);
    
    if (isPlaying === true) {
      setIsPlaying(!isPlaying);
    };

    setAudios(audios.map(audio => {
      return {...audio, playing: false};
    }));
  }

  function handleAddNewAudio(e) {
    e.preventDefault();
    if (link == '') {
      setLinkAlert(true);
    } else if (!/\.(mp3|wav|ogg)$/i.test(link)) {
        setLinkValidity(true);
    }
    if (name == '') {
      setNameAlert(true);
    }
    if (name == '' || link == '' || !/\.(mp3|wav|ogg)$/i.test(link)) {
      return;
    }

    const newAudios = [...audios, {
      title: name,
      url: link,
      playing: false,
      id: uuidv4()
    }];
    setAudios(newAudios);

    setName('');
    setLink('');
  }

  return (
      <form className='menu menu__top'>
          <div className='line'>
            <input className='input' type="text" placeholder='Paste your audio URL here...' required onChange={handleLinkChange} value={link}/>

            {linkAlert === true &&
              <div className='alert'>Fill in the link!</div>}
            {linkValidity === true &&
              <div className='alert alert__validity'>Invalid link format!</div>}

            <button className='button add' type='submit' onClick={handleAddNewAudio}>Add new Audio file</button>
          </div>
          <div className='line'>
            <input className='input' type="text" placeholder='Type in a new audio title...' required onChange={handleNameChange} value={name}/>

            {nameAlert === true &&
              <div className='alert'>Fill in the title!</div>}

            <button className='button edit' type='button' onClick={handleEditing}>{
              isEditing === false ? 'Edit my playlist' : 'Save'
            }</button>
          </div>
      </form>
  );
}
