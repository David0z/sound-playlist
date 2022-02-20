import { useState, useEffect, useRef, useLayoutEffect } from "react";
import TopMenu from "./components/TopMenu";
import BottomMenu from "./components/BottomMenu";
import SideMenu from "./components/SideMenu";
import { v4 as uuidv4 } from 'uuid';
import PlayError from "./PlayError";

function App() {
  // COLOR THEMES --------------
  const [colorThemes, setColorThemes] = useState([
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

    const [currentColorTheme, setCurrentColorTheme] = useState(colorThemes[0]);
    const [toggleThemeSwitch, setToggleThemeSwitch] = useState(false);

    function handleThemeChange(theme) {
      if (toggleThemeSwitch === false) {
        if (currentColorTheme === theme) {
          return;
      }
      setCurrentColorTheme(theme);
      setPlaylists(playlists.map(playlist => {
        if (playlist.active === true) {
          return {...playlist, colorTheme: theme}
        } else {
          return playlist;
        }
      }))
      } else {
        if (currentColorTheme === theme && playlists.filter(playlist => playlist.colorTheme === theme).length === playlists.length) {
          return;
      }
      setCurrentColorTheme(theme);
      setPlaylists(playlists.map(playlist => ({...playlist, colorTheme: theme})));
      }
  }

    useEffect(() => {
        document.documentElement.style.setProperty('--theme-one', currentColorTheme.themeOne);
        document.documentElement.style.setProperty('--theme-two', currentColorTheme.themeTwo);
        document.documentElement.style.setProperty('--theme-three', currentColorTheme.themeThree);
        document.documentElement.style.setProperty('--theme-four', currentColorTheme.themeFour);
    }, [currentColorTheme]);

  // PLAYLISTS --------------

  const [playlists, setPlaylists] = useState([
    {name: 'My Playlist 1',
    audioFiles: [
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
    ],
    id: uuidv4(),
    active: true,
    colorTheme: colorThemes[0]
  }
  ]);

  const [settingName, setSettingName] = useState(false);

  function handlePlaylistClick(id, playlist) {
    // return if clicked on active playlist
    if (playlists.filter(playlist => playlist.id === id)[0].active === true) {
      return;
    }
    // reset current audio node if there is any
    if (playingAudioNode) {
      playingAudioNode.pause()
      playingAudioNode.currentTime = 0;
      setPlayingAudioNode(null);
    }
    // reset playing button
    setIsPlaying(false);
    // reset editing mode
    setIsEditing(false);
    // reset setting name mode
    if (settingName === true) {
      setSettingName(false);
    }
    // set clicked playlist to active and turn off all other
    setPlaylists(playlists.map(playlist => {
      if (playlist.id === id) {
        return {...playlist, active: true}
      } else {
        return {...playlist, active: false}
      }
    }));
    // set audios to those of clicked playlist and turn off their playing mode
    setAudios(playlists.filter(playlist => playlist.id === id)[0].audioFiles.map(audio => {
      if (audio.playing === true) {
        return {...audio, playing: false};
      } else {
        return audio;
      }
    }));
    // set color theme to that of the clicked playlist
    setCurrentColorTheme(playlist.colorTheme);
  }

  function handleAddPlaylist() {
    if (playlists.length === 0) {
      setPlaylists([...playlists, {
        name: `New Playlist ${playlists.length + 1}`,
        audioFiles: [],
        id: uuidv4(),
        active: true,
        colorTheme: currentColorTheme
        }])
    } else {
      setPlaylists([...playlists, {
        name: `New Playlist ${playlists.length + 1}`,
        audioFiles: [],
        id: uuidv4(),
        active: false,
        colorTheme: currentColorTheme
        }])
    }
  }

  function handlePlaylistDelete(id) {
    // turn off playing mode
    setIsPlaying(false);
    // if playlists are more than 1
    if (playlists.length > 1) {
      // if I delete the first playlist (index 0)
      if (playlists.indexOf(playlists.filter(playlist => playlist.id === id)[0]) === 0) {
        // delete the clicked (first one)
        setPlaylists(playlists.filter(playlist => playlist.id != id).map(playlist => {
          // and set the second one to active
          if (playlists.indexOf(playlist) === 1) {
            setAudios(playlist.audioFiles);
            setCurrentColorTheme(playlist.colorTheme);
            return {...playlist, active: true};
          } else {
            return playlist;
          }
        }));
      } else {
        // delete the clicked
        setPlaylists(playlists.filter(playlist => playlist.id != id).map(playlist => {
          // and set the first one to active
          if (playlists.indexOf(playlist) === 0) {
            setAudios(playlist.audioFiles);
            setCurrentColorTheme(playlist.colorTheme);
            return {...playlist, active: true};
          } else {
            return playlist;
          }
        }));
      }
    } else {
      setPlaylists(playlists.filter(playlist => playlist.id != id));
      setAudios([]);
    }
  }

  // AUDIOS --------------

  const [audios, setAudios] = useState([]);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [playingAudioNode, setPlayingAudioNode] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    // when audios change, set them to the audios of currently active playlist
    setPlaylists(playlists.map(playlist => {
      if (playlist.active === true) {
        return {...playlist, audioFiles: audios};
      } else {
        return playlist;
      }
    }))
  }, [audios]);

  useEffect(() => {
    // when volume or audio node change, set the volume of that node to current volume
    if (isMounted.current) {
      if (playingAudioNode != null) {
        playingAudioNode.volume = volume / 100;
      }
    } else {
      isMounted.current = true;
    }
  }, [volume, playingAudioNode]);



  function togglePlaying(id, audioNode) {
    if (audios.filter(audio => audio.error).length > 0) {
      if (audios.filter(audio => audio.error === true)[0].id === id) {
        setIsError(true);
        return;
      }
    }
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

  // LOCAL STORAGE --------------
  
  // useLayoutEffect for instant print of custom color theme
  useLayoutEffect(() => {
    if (localStorage.getItem('playlists')) {
      if (JSON.parse(localStorage.getItem('playlists')).length > 0) {
        setCurrentColorTheme(JSON.parse(localStorage.getItem('playlists')).filter(playlist => playlist.active === true)[0].colorTheme);
      } else {
        setCurrentColorTheme(JSON.parse(localStorage.getItem('lastColorTheme')));
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('playlists')) {
      // if there are playlists in storage
      if (JSON.parse(localStorage.getItem('playlists')).length > 0) {
        setPlaylists(JSON.parse(localStorage.getItem('playlists')));
        setAudios(JSON.parse(localStorage.getItem('playlists')).filter(playlist => playlist.active === true)[0].audioFiles.map(file => ({...file, playing: false})));
      } else {
        // if playlists are empty in storage
        setPlaylists([]);
        setAudios([]);
      }
    } else {
      // important for starting point, with no storage
      if (playlists.length > 0) {
        setCurrentColorTheme(playlists.filter(playlist => playlist.active === true)[0].colorTheme)
        setAudios(playlists.filter(playlist => playlist.active === true)[0].audioFiles)
      }
    }
  }, []);

  // save current color theme in storage
  useEffect(() => {
    localStorage.setItem('lastColorTheme', JSON.stringify(currentColorTheme));
  }, [currentColorTheme]);

  // save playlists in storage
  useEffect(() => {
    localStorage.setItem('playlists', JSON.stringify(playlists));
  }, [playlists]);

  useEffect(() => {
    if (localStorage.getItem('colorThemes')) {
      setColorThemes(JSON.parse(localStorage.getItem('colorThemes')));
    } else {
      localStorage.setItem('colorThemes', JSON.stringify(colorThemes));
    }

    if (localStorage.getItem('themeSwitchToggler')) {
      setToggleThemeSwitch(JSON.parse(localStorage.getItem('themeSwitchToggler')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeSwitchToggler', JSON.stringify(toggleThemeSwitch));
  }, [toggleThemeSwitch]);

  // SIDE MENU STUFF ------------------------------------------------------
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleBodyClick() {
    if (toggleMenu === true) {
      setToggleMenu(false);
    }
  }

  // testing

  // change to false
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (playingAudioNode != null) {
      if (isPlaying === true) {

          const playPromise = playingAudioNode.play();

          playPromise.catch(function(error) {
            setIsError(true);
            // console.log(error);
            setPlayingAudioNode(null);
            setIsPlaying(false);
            setAudios(prevAudios => {
              return prevAudios.map(audio => {
                if (audio.playing === true) {
                  return {...audio, error: true};
                } else {
                  return audio;
                }
              });
            });
            setAudios(prevAudios => {
              return prevAudios.map(audio => {
                return {...audio, playing: false};
              });
            })
          });
      }
    }
  }, [playingAudioNode]);

  return (
    <div className="window" onClick={handleBodyClick}>
      <div className="wrapper">

        <TopMenu playingAudioNode={playingAudioNode} setPlayingAudioNode={setPlayingAudioNode} isEditing={isEditing} setIsEditing={setIsEditing} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audios={audios} setAudios={setAudios} playlists={playlists}/>

        <BottomMenu playingAudioNode={playingAudioNode} setVolume={setVolume} volume={volume} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audios={audios} setAudios={setAudios} isEditing={isEditing} setIsEditing={setIsEditing} togglePlaying={togglePlaying} setPlayingAudioNode={setPlayingAudioNode} handleDeleteElement={handleDeleteElement} setIsError={setIsError} />

      </div>

      <SideMenu currentColorTheme={currentColorTheme} setCurrentColorTheme={setCurrentColorTheme} colorThemes={colorThemes} playlists={playlists} setPlaylists={setPlaylists} handlePlaylistClick={handlePlaylistClick} handleThemeChange={handleThemeChange} handleAddPlaylist={handleAddPlaylist} handlePlaylistDelete={handlePlaylistDelete} toggleThemeSwitch={toggleThemeSwitch} setToggleThemeSwitch={setToggleThemeSwitch} settingName={settingName} setSettingName={setSettingName} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      {isError === true && < PlayError setIsError={setIsError} setAudios={setAudios} />}

    </div>
  );
}

export default App;
