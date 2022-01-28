import React from 'react';
import { FaStepBackward, FaStepForward, FaPlay, FaPause } from "react-icons/fa";

export default function TimingControl({ isPlaying, setIsPlaying}) {

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className='timing-control'>
      <FaStepBackward className='icon' />
      {isPlaying === false 
      ? <FaPlay className='icon icon__play-pause' onClick={handlePlayPause}/> 
      : <FaPause className='icon icon__play-pause' onClick={handlePlayPause}/>}
      <FaStepForward className='icon' />
    </div>
  );
}
