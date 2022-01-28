import { useState, useEffect } from "react";
import TopMenu from "./components/TopMenu";
import BottomMenu from "./components/BottomMenu";

function App() {
  // STATE

  const [audios, setAudios] = useState([
    {title: 'The Sound Title 1', length: '5:01', playing: true, id: 1},
    {title: 'The Sound Title 2', length: '5:01', playing: false, id: 2},
    {title: 'The Sound Title 3', length: '5:01', playing: false, id: 3},
    {title: 'The Sound Title 4', length: '5:01', playing: false, id: 4},
    {title: 'The Sound Title 5', length: '5:01', playing: false, id: 5},
    {title: 'The Sound Title 6', length: '5:01', playing: false, id: 6},
    {title: 'The Sound Title 7', length: '5:01', playing: false, id: 7},
    {title: 'The Sound Title 8', length: '5:01', playing: false, id: 8},
    {title: 'The Sound Title 9', length: '5:01', playing: false, id: 9},
  ]);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function togglePlaying(id) {
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
  }

  return (
    <div className="window">
      <div className="wrapper">
        <TopMenu isEditing={isEditing} setIsEditing={setIsEditing} />
        <BottomMenu setVolume={setVolume} volume={volume} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audios={audios} setAudios={setAudios} isEditing={isEditing} setIsEditing={setIsEditing} togglePlaying={togglePlaying}/>
      </div>
    </div>
  );
}

export default App;
