import React from 'react';
import { FaStepBackward, FaStepForward, FaPlay, FaPause } from "react-icons/fa";

export default function TimingControl({ isPlaying, setIsPlaying, playingAudioNode, audios, setAudios, isEditing, playMode, setIsError }) {

  function handlePlayPause() {
    if (audios.filter(audio => audio.error).length > 0) {
      if (audios.filter(audio => audio.error === true)[0].id === audios[0].id) {
        setIsError(true);
        return;
      }
    }
    if (isPlaying === false) {
      if (audios.length === 0 || isEditing === true) {
        return;
      } else if (playingAudioNode === null) {
        setIsPlaying(true);
        setAudios(audios.map(audio => {
          if (audio.id === audios[0].id) {
            return { ...audio, playing: true };
          } else {
            return audio;
          }
        }));
      } else {
        setIsPlaying(!isPlaying);
        playingAudioNode.play();
      }
    } else {
      setIsPlaying(!isPlaying);
      playingAudioNode.pause();
    }
  }

  function handleForward() {
    if (playingAudioNode === null || isEditing === true || audios.length === 1) {
      return;
    } else {
      playingAudioNode.pause();
      playingAudioNode.currentTime = 0;
      if (isPlaying === false) {
        setIsPlaying(!isPlaying);
      }

      const currentIndex = audios.indexOf(audios.filter(audio => audio.playing === true)[0]);

      switch (playMode[0]) {
        case 'repeat-playlist':
          if (currentIndex === audios.length - 1) {
            setAudios(audios.map(audio => {
              if (audio.playing === true) {
                return { ...audio, playing: false }
              } else if (audio.id === audios[0].id) {
                return { ...audio, playing: true };
              } else {
                return audio;
              }
            }));
          } else {
            setAudios(audios.map(audio => {
              if (audio.playing === true) {
                return { ...audio, playing: false }
              } else if (audio.id === audios[currentIndex + 1].id) {
                return { ...audio, playing: true };
              } else {
                return audio;
              }
            }));
          }
          break;
        case 'repeat-track':
          playingAudioNode.currentTime = 0;
          playingAudioNode.play();
          break;
        case 'random':
          let randomIndex = Math.floor(Math.random() * audios.length);
          if (currentIndex === randomIndex) {
            playingAudioNode.currentTime = 0;
            playingAudioNode.play();
          } else {
            setAudios(audios.map(audio => {
              if (audio.playing === true) {
                return { ...audio, playing: false }
              } else if (audio.id === audios[randomIndex].id) {
                return { ...audio, playing: true };
              } else {
                return audio;
              }
            }));
          }
          break;
      }
    }
  }

  function handleBackward() {
    if (playingAudioNode === null || isEditing === true || audios.length === 1) {
      return;
    } else {
      playingAudioNode.pause();
      playingAudioNode.currentTime = 0;
      if (isPlaying === false) {
        setIsPlaying(!isPlaying);
      }

      const currentIndex = audios.indexOf(audios.filter(audio => audio.playing === true)[0]);

      switch (playMode[0]) {
        case 'repeat-playlist':
          if (currentIndex === 0) {
            setAudios(audios.map(audio => {
              if (audio.playing === true) {
                return { ...audio, playing: false }
              } else if (audio.id === audios[audios.length - 1].id) {
                return { ...audio, playing: true };
              } else {
                return audio;
              }
            }));
          } else {
            setAudios(audios.map(audio => {
              if (audio.playing === true) {
                return { ...audio, playing: false }
              } else if (audio.id === audios[currentIndex - 1].id) {
                return { ...audio, playing: true };
              } else {
                return audio;
              }
            }));
          }
          break;
        case 'repeat-track':
          playingAudioNode.currentTime = 0;
          playingAudioNode.play();
          break;
        case 'random':
          let randomIndex = Math.floor(Math.random() * audios.length);
          if (currentIndex === randomIndex) {
            playingAudioNode.currentTime = 0;
            playingAudioNode.play();
          } else {
            setAudios(audios.map(audio => {
              if (audio.playing === true) {
                return { ...audio, playing: false }
              } else if (audio.id === audios[randomIndex].id) {
                return { ...audio, playing: true };
              } else {
                return audio;
              }
            }));
          }
          break;
      }
    }
  }

  return (
    <div className='timing-control'>
      <FaStepBackward className='icon' onClick={handleBackward} />
      {isPlaying === false
        ? <FaPlay className='icon icon__play-pause' onClick={handlePlayPause} />
        : <FaPause className='icon icon__play-pause' onClick={handlePlayPause} />}
      <FaStepForward className='icon' onClick={handleForward} />
    </div>
  );
}
