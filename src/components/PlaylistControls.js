import React from 'react';
import VolumeControl from './VolumeControl';
import PlayModeControl from './PlayModeControl';
import TimingControl from './TimingControl';

export default function PlaylistControls({ setVolume, volume, playMode, setPlayMode, isPlaying, setIsPlaying }) {
  return (
    <div className='playlist-controls'>
        <VolumeControl setVolume={setVolume} volume={volume}/>
        <TimingControl isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        <PlayModeControl playMode={playMode} setPlayMode={setPlayMode}/>
    </div>
  );
}
