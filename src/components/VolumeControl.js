import React from 'react';
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function VolumeControl({ setVolume, volume, playingAudioNode }) {

    function handleVolumeChange(e) {
        setVolume(e.target.value);
    }

  return (
    <div className='volume-control'>
        <input 
        type='range' 
        min='0' 
        max='100' 
        value={volume} 
        name='volume' 
        id='volume' 
        onChange={handleVolumeChange} 
        style={{ background: `linear-gradient(to right, var(--theme-three) 0% ${volume}%, var(--theme-one) ${volume}% 100%)` }} />
        {volume == 0 ? <FaVolumeMute className='volume-control__icon--mute'/> : <FaVolumeUp className='volume-control__icon'/>}
    </div>
  );
}
