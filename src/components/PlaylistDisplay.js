import React from 'react';
import TrackCounter from './TrackCounter';
import Playlist from './Playlist';

export default function PlaylistDisplay({ isPlaying, audios, setAudios, isEditing, togglePlaying, playMode, setPlayingAudioNode }) {
  return (
    <div className='playlist-display'>
      <TrackCounter audios={audios} setAudios={setAudios}/>
      <Playlist isPlaying={isPlaying} audios={audios} setAudios={setAudios} isEditing={isEditing} togglePlaying={togglePlaying} playMode={playMode} setPlayingAudioNode={setPlayingAudioNode}/>
    </div>
  );
}
