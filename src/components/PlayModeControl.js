import React from 'react';
import { FaRandom, FaRedo, FaInfinity } from "react-icons/fa";

export default function PlayModeControl({ playMode, setPlayMode }) {

  function handlePlayModeSwitch() {
    const newPlayMode = [...playMode.slice(1, playMode.length), playMode[0]];
    setPlayMode(newPlayMode);
  }

  return (
    <div className='play-mode-control'>
      <div className='play-mode-control__text-wrap'>
        <p className='play-mode-control__main'>Play mode:</p>
        <p className='play-mode-control__second'>
          {(() => {
            if (playMode[0] == 'repeat-playlist') {
              return 'Repeat Playlist';
            } else if (playMode[0] == 'repeat-track') {
              return 'Repeat Track';
            } else {
              return 'Random';
            }})()
          }
        </p>
      </div>
      <button className='play-mode-control__button' onClick={handlePlayModeSwitch}>
        {(() => {
            if (playMode[0] == 'repeat-playlist') {
              return <FaInfinity className='icon'/>;
            } else if (playMode[0] == 'repeat-track') {
              return <FaRedo className='icon'/>;
            } else {
              return <FaRandom className='icon'/>;
            }})()

        }
      </button>
    </div>
  );
}
