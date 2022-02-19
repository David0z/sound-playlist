import { React, useRef, useState} from 'react';
import { FaPlay, FaPause, FaGripVertical, FaTimes } from "react-icons/fa";
import { useEffect } from 'react/cjs/react.development';
import { Draggable } from 'react-beautiful-dnd';

export default function AudioElement({isPlaying, audios, setAudios, isEditing, togglePlaying, audio, playMode, setPlayingAudioNode, handleDeleteElement }) {

    const audioNode = useRef(null);
    const [isGrabbing, setIsGrabbing] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [audioDuration, setAudioDuration] = useState(0);

    useEffect(() => {
        if (isEditing === false && audio.playing === true) {
            setPlayingAudioNode(audioNode.current);
            if (isPlaying === false) {
                audioNode.current.pause();
            } else {
                audioNode.current.play();
            }
        }
    }, [audios]);
    
    function handleAudioEnd() {
        if (isPlaying === true) {
                if (audios.length === 1) {
                    audioNode.current.currentTime = 0;
                    audioNode.current.play();
                    return;
                }
                const currentIndex = audios.indexOf(audio);
                switch(playMode[0]) {
                    case 'repeat-playlist':
                        if (currentIndex === audios.length - 1) {
                            setAudios(audios.map(audio => {
                                if (audio.playing === true) {
                                    return {...audio, playing: false}
                                } else if (audio.id === audios[0].id) {
                                    return {...audio, playing: true};
                                } else {
                                    return audio;
                                }
                            }));
                        } else {
                            setAudios(audios.map(audio => {
                                if (audio.playing === true) {
                                    return {...audio, playing: false}
                                } else if (audio.id === audios[currentIndex + 1].id) {
                                    return {...audio, playing: true};
                                } else {
                                    return audio;
                                }
                            }));
                        }
                        break;
                    case 'repeat-track':
                        audioNode.current.currentTime = 0;
                        audioNode.current.play();
                        break;
                    case 'random':
                        let randomIndex = Math.floor(Math.random() * audios.length);
                        if (currentIndex === randomIndex) {
                            audioNode.current.currentTime = 0;
                            audioNode.current.play();
                        } else {
                            setAudios(audios.map(audio => {
                                if (audio.playing === true) {
                                    return {...audio, playing: false}
                                } else if (audio.id === audios[randomIndex].id) {
                                    return {...audio, playing: true};
                                } else {
                                    return audio;
                                }
                            }));
                        }
                        break;
                }
        }
    }

    function handleTimeUpdate() {
        setCurrentTime(audioNode.current.currentTime);
    }

    function handleTimingChange(e) {
        audioNode.current.currentTime = e.target.value;
    }

    function formatTime(thetime) {
        let sec_num = Math.floor(thetime);
        let hours   = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}

        if (thetime < 60) {
            return '00:'+seconds;
        } else if (thetime >= 60 && thetime < 3600) {
            return minutes+':'+seconds;
        } else {
            return hours+':'+minutes+':'+seconds;
        }
    }

  return (
    <Draggable draggableId={audio.id} index={audios.indexOf(audio)} isDragDisabled={isGrabbing === true ? false : true}>
    {(provided, snapshot) => (
        <div className='audio' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={{boxShadow: snapshot.isDragging ? '0 0 1rem var(--theme-four)' : 'none',
        ...provided.draggableProps.style}}>
        <audio src={audio.url} ref={audioNode} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={() => {
            setAudioDuration(audioNode.current.duration);
            
            }} onEnded={handleAudioEnd}/>

        {isEditing === true && <div className='editing editing__drag' onMouseMove={ () => setIsGrabbing(true)} onMouseLeave={() => setIsGrabbing(false)}>
            <FaGripVertical />
        </div>}
        
        <div className='audio__main'>

            <div className='audio__main--title' 
            style={{backgroundColor: (audio.playing === true && isEditing === false) && 'var(--theme-three'}}>
                {audio.title}
            </div>

            <div className='audio__main--duration'> 
                {(audio.playing === true && isEditing === false) &&
                <input 
                    className='audio__main--duration__input'
                    style={{background: `linear-gradient(to right, var(--theme-four) 0% ${currentTime/audioDuration*100}%, transparent ${currentTime/audioDuration*100}% 100%)`}}
                    type='range'
                    min='0' 
                    max={audioDuration}
                    value={currentTime}
                    step='any'
                    onChange={handleTimingChange}

                    />
                }
                <p className='audio__main--duration__timer' style={
                    (audio.playing === true && isEditing === false) ? {
                        color: 'var(--theme-one)'
                    } : {
                        color: 'var(--theme-four)'
                    }
                }>
                    {(audio.playing === true && isEditing === false) && `${formatTime(currentTime)} / `}
                    {formatTime(audioDuration)}
                </p>
            </div>

        </div>

        {isEditing === true && 
        <div className='editing editing__delete' 
        onClick={() => handleDeleteElement(audio.id)}>
            <FaTimes />
        </div>}

        {isEditing === false && 
        <div className='pause-play' onClick={() => togglePlaying(audio.id, audioNode.current)} style={{opacity: audio.playing === true && 1}}>
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
    )}
    </Draggable>
  );
}
