import { useState, useEffect, useRef } from "react";
import TopMenu from "./components/TopMenu";
import BottomMenu from "./components/BottomMenu";
import SideMenu from "./components/SideMenu";
// TEMPORARY
import { v4 as uuidv4 } from 'uuid';

function App() {
  // STATE
  const [colorThemes] = useState([
    {themeOne: '#FFFFFF',
    themeTwo: '#D3D2ED',
    themeThree: '#7075E5',
    themeFour: '#3D4080',
    id: uuidv4()},

    {themeOne: '#A7FF83',
    themeTwo: '#17B978',
    themeThree: '#086972',
    themeFour: '#071A52',
    id: uuidv4()},

    {themeOne: '#E2F3F5',
    themeTwo: '#22D1EE',
    themeThree: '#3D5AF1',
    themeFour: '#0E153A',
    id: uuidv4()},

    {themeOne: '#FCF5B8',
    themeTwo: '#B4CD93',
    themeThree: '#427A5B',
    themeFour: '#403F3F',
    id: uuidv4()},
    
    {themeOne: '#E2DED3',
    themeTwo: '#857671',
    themeThree: '#4E413B',
    themeFour: '#FF6D24',
    id: uuidv4()},
    
    {themeOne: '#F3EDED',
    themeTwo: '#F5C16C',
    themeThree: '#DF8931',
    themeFour: '#AA530E',
    id: uuidv4()},
    
    {themeOne: '#EFECEC',
    themeTwo: '#62929A',
    themeThree: '#5C5757',
    themeFour: '#363434',
    id: uuidv4()},
    
    {themeOne: '#F2F2F2',
    themeTwo: '#393E46',
    themeThree: '#F96D00',
    themeFour: '#222831',
    id: uuidv4()},
    
    {themeOne: '#FFD7F1',
    themeTwo: '#D87CA1',
    themeThree: '#B94E8A',
    themeFour: '#7D156D',
    id: uuidv4()},
    
    {themeOne: '#E6F8F6',
    themeTwo: '#A0F6D2',
    themeThree: '#72DFD0',
    themeFour: '#03414D',
    id: uuidv4()},
    
    {themeOne: '#C6DE41',
    themeTwo: '#2D6E7E',
    themeThree: '#153B44',
    themeFour: '#071C21',
    id: uuidv4()},
    
    {themeOne: '#BEF2EB',
    themeTwo: '#6DC995',
    themeThree: '#3A91AA',
    themeFour: '#6B4897',
    id: uuidv4()},
    
    {themeOne: '#ED8D8D',
    themeTwo: '#8D6262',
    themeThree: '#4D4545',
    themeFour: '#393232',
    id: uuidv4()},
    
    {themeOne: '#FDEF96',
    themeTwo: '#F7B71D',
    themeThree: '#AFA939',
    themeFour: '#2B580C',
    id: uuidv4()},
    
    {themeOne: '#EBFFFB',
    themeTwo: '#FF5858',
    themeThree: '#61234E',
    themeFour: '#032535',
    id: uuidv4()},
    
    {themeOne: '#8ECCCC',
    themeTwo: '#50717B',
    themeThree: '#3A4042',
    themeFour: '#212121',
    id: uuidv4()},
    
    {themeOne: '#B9EAF5',
    themeTwo: '#7DBCC8',
    themeThree: '#6D739D',
    themeFour: '#6F4F8B',
    id: uuidv4()},
    
    {themeOne: '#FBFF5F',
    themeTwo: '#C89034',
    themeThree: '#892C41',
    themeFour: '#2F1B44',
    id: uuidv4()}
    ]);

    const [currentColorTheme, setCurrentColorTheme] = useState(colorThemes[1]);

    useEffect(() => {
        document.documentElement.style.setProperty('--theme-one', currentColorTheme.themeOne);
        document.documentElement.style.setProperty('--theme-two', currentColorTheme.themeTwo);
        document.documentElement.style.setProperty('--theme-three', currentColorTheme.themeThree);
        document.documentElement.style.setProperty('--theme-four', currentColorTheme.themeFour);
    }, [currentColorTheme]);

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
      <SideMenu currentColorTheme={currentColorTheme} setCurrentColorTheme={setCurrentColorTheme} colorThemes={colorThemes}/>
    </div>
  );
}

export default App;
