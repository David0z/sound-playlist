import React from 'react';

export default function TrackCounter({audios}) {
  return (
    <div className='track-counter'>
        <p>Track:</p>
        <p>{1 + audios.indexOf(audios.filter(audio => audio.playing === true)[0])}/{audios.length}</p>
    </div>
  );
}
