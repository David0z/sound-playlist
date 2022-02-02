import { useState, useEffect, useRef } from "react";
import TopMenu from "./components/TopMenu";
import BottomMenu from "./components/BottomMenu";
// TEMPORARY
import { v4 as uuidv4 } from 'uuid';

function App() {
  // STATE

  const [audios, setAudios] = useState([
    {
      title: 'First Sound Title',
      url: 'https://actions.google.com/sounds/v1/crowds/voices_angry.ogg',
      playing: false,
      id: uuidv4()
    },
    {
      title: 'Second Sound Title',
      url: 'https://actions.google.com/sounds/v1/crowds/voices_on_street_accent.ogg',
      playing: false,
      id: uuidv4()
    },
    {
      title: 'Tird Sound Title',
      url: 'https://actions.google.com/sounds/v1/emergency/emergency_siren_close_long.ogg',
      playing: false,
      id: uuidv4()
    },
    {
      title: 'Fourth Sound Title',
      url: 'https://actions.google.com/sounds/v1/crowds/voices_angry.ogg',
      playing: false,
      id: uuidv4()
    },
    {
      title: 'Fifth Sound Title',
      url: 'https://actions.google.com/sounds/v1/crowds/voices_on_street_accent.ogg',
      playing: false,
      id: uuidv4()
    },
    {
      title: 'Sixth Sound Title',
      url: 'https://actions.google.com/sounds/v1/emergency/emergency_siren_close_long.ogg',
      playing: false,
      id: uuidv4()
    },
  ]);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [playingAudioNode, setPlayingAudioNode] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      if (playingAudioNode != null) {
        playingAudioNode.volume = volume / 100;
      }
    } else {
      isMounted.current = true;
    }
  }, [volume, playingAudioNode]);



  function togglePlaying(id, audioNode) {
    if(isPlaying && audios.filter(audio => audio.playing === true)[0].id != id) {
    } else {
      setIsPlaying(!isPlaying);
    }

    setAudios(audios.map(audio => {
      if (audio.playing === true && audio.id != id) {
        return {...audio, playing: false};
      }
      if (audio.id === id) {
        return {...audio, playing: true};
      } else {
        return audio;
      }
    }));

    setPlayingAudioNode(audioNode);
    
    if (isPlaying === false) {
      if (audioNode == playingAudioNode || playingAudioNode == null) {
        audioNode.play();
      } else {
        playingAudioNode.pause();
        playingAudioNode.currentTime = 0;
        audioNode.play();
      }
    } else {
      if (audioNode == playingAudioNode || playingAudioNode == null) {
        audioNode.pause();
      } else {
        playingAudioNode.pause();
        playingAudioNode.currentTime = 0;
        audioNode.play();
      }
    }

  }

  function handleDeleteElement(id) {
    setAudios(audios.filter(audio => audio.id != id));
  }

  return (
    <div className="window">
      <div className="wrapper">
        <TopMenu playingAudioNode={playingAudioNode} setPlayingAudioNode={setPlayingAudioNode} isEditing={isEditing} setIsEditing={setIsEditing} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audios={audios} setAudios={setAudios}/>
        <BottomMenu playingAudioNode={playingAudioNode} setVolume={setVolume} volume={volume} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audios={audios} setAudios={setAudios} isEditing={isEditing} setIsEditing={setIsEditing} togglePlaying={togglePlaying} setPlayingAudioNode={setPlayingAudioNode} handleDeleteElement={handleDeleteElement}/>
      </div>
    </div>
  );
}

export default App;
