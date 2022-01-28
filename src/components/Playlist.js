import React from 'react';
import AudioElement from './AudioElement';

export default function Playlist({ isPlaying, setIsPlaying, audios, setAudios, isEditing, setIsEditing, togglePlaying}) {

  return (
    <div className='playlist'>
        <div className='playlist__wrapper'>
            {
                audios.map(audio => {
                    return (
                        <AudioElement isPlaying={isPlaying} setIsPlaying={setIsPlaying} audio={audio} setAudios={setAudios} isEditing={isEditing} setIsEditing={setIsEditing} togglePlaying={togglePlaying} key={audio.id}/>
                    );
                })
            }
        </div>
    </div>
  );
}
