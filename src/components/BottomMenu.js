import React from 'react';
import { useState } from 'react';
import PlaylistControls from './PlaylistControls';
import PlaylistDisplay from './PlaylistDisplay';

export default function BottomMenu({ setVolume, volume, isPlaying, setIsPlaying, audios, setAudios, isEditing, setIsEditing, togglePlaying }) {

  const [playMode, setPlayMode] = useState(['repeat-playlist', 'repeat-track', 'random']);

  return (
      <div className='menu menu__bottom'>
        <PlaylistControls setVolume={setVolume} volume={volume} setPlayMode={setPlayMode} playMode={playMode} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        <PlaylistDisplay isPlaying={isPlaying} setIsPlaying={setIsPlaying} audios={audios} setAudios={setAudios} isEditing={isEditing} setIsEditing={setIsEditing} togglePlaying={togglePlaying}/>
      </div>
  );
}
