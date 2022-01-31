import React from 'react';
import AudioElement from './AudioElement';

export default function Playlist({ isPlaying, audios, setAudios, isEditing, togglePlaying, playMode, setPlayingAudioNode }) {

  return (
    <div className='playlist'>
        <div className='playlist__wrapper'>
            {
                audios.map(audio => {
                    return (
                        <AudioElement isPlaying={isPlaying} audio={audio} audios={audios} setAudios={setAudios} isEditing={isEditing} togglePlaying={togglePlaying} key={audio.id} playMode={playMode} setPlayingAudioNode={setPlayingAudioNode}/>
                    );
                })
            }
        </div>
    </div>
  );
}
