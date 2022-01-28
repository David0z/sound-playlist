import React from 'react';
import { FaPlay, FaPause, FaGripVertical, FaTimes } from "react-icons/fa";

export default function AudioElement({isPlaying, setIsPlaying, setAudios, isEditing, setIsEditing, togglePlaying, audio}) {

  return (
    <div className='audio'>

        {isEditing === true && <div className='editing editing__drag'>
            <FaGripVertical />
        </div>}
        
        <div className='audio__main'>

            <div className='audio__main--title' 
            style={{backgroundColor: audio.playing === true && 'var(--theme-three'}}>
                {audio.title}
            </div>

            <div className='audio__main--duration' 
            style={{
                backgroundColor: audio.playing === true && 'var(--theme-four)',
                color: audio.playing === true && 'var(--theme-one)'}}>
                {audio.length}
            </div>

        </div>

        {isEditing === true && 
        <div className='editing editing__delete'>
            <FaTimes />
        </div>}

        {isEditing === false && 
        <div className='pause-play' onClick={() => togglePlaying(audio.id)} style={{opacity: audio.playing === true && 1}}>
        {(() => {
            if (isPlaying === false) {
                return <FaPlay />;
            } else {
                if (audio.playing === false) {
                    return <FaPlay />;
                }
                return <FaPause />;
            }
        })()
        }
        </div>}
</div>
  );
}
