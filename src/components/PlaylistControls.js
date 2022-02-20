import React from 'react';
import VolumeControl from './VolumeControl';
import PlayModeControl from './PlayModeControl';
import TimingControl from './TimingControl';

export default function PlaylistControls({ setVolume, volume, playMode, setPlayMode, isPlaying, setIsPlaying, playingAudioNode, audios, setAudios, isEditing, setIsError }) {
  return (
    <div className='playlist-controls'>
        <VolumeControl setVolume={setVolume} volume={volume} playingAudioNode={playingAudioNode}/>
        <TimingControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} playingAudioNode={playingAudioNode} audios={audios} isEditing={isEditing} setAudios={setAudios} playMode={playMode} setIsError={setIsError} />
        <PlayModeControl playMode={playMode} setPlayMode={setPlayMode}/>
    </div>
  );
}
