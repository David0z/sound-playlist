import React from 'react';
import TrackCounter from './TrackCounter';
import Playlist from './Playlist';

export default function PlaylistDisplay({ isPlaying, setIsPlaying, audios, setAudios, isEditing, setIsEditing, togglePlaying}) {
  return (
    <div className='playlist-display'>
      <TrackCounter audios={audios} setAudios={setAudios}/>
      <Playlist isPlaying={isPlaying} setIsPlaying={setIsPlaying} audios={audios} setAudios={setAudios} isEditing={isEditing} setIsEditing={setIsEditing} togglePlaying={togglePlaying}/>
    </div>
  );
}
