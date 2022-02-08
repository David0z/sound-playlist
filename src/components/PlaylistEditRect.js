import React, { useState } from 'react';
import { FaCheck, FaPen, FaTimes } from 'react-icons/fa';

export default function PlaylistEditRect({ playlists, setPlaylists, handlePlaylistClick, handlePlaylistDelete, playlist, settingName, setSettingName }) {

    function handleRenaming(e, id) {
      setPlaylists(playlists.map(playlist => {
        if (playlist.id === id) {
          return {...playlist, name: e.target.value};
        } else {
          return playlist;
        }
      }))
    }
  
    function handleRenameClick() {
      setSettingName(!settingName);
    }

  return (
    <div className='playlist-edit' onClick={() => handlePlaylistClick(playlist.id, playlist)} style={{
        backgroundColor: playlist.active === true && 'var(--theme-three)',
        cursor: playlist.active === false && 'pointer'
      }}>
        <input 
        style={{
          color: playlist.active === false && 'var(--theme-three)',
          pointerEvents: playlist.active === false && 'none',
          backgroundColor: settingName === true && 'var(--theme-four)'
        }} 
        type='text' 
        value={playlist.name}
        disabled={settingName === false ? true : false}
        onChange={(e) => handleRenaming(e, playlist.id)}
        ></input>
        {playlist.active === true && 
        <div className='playlist-edit__buttons'>
          < FaTimes className='playlist-edit__button playlist-edit__button--delete' title='Delete' onClick={() => handlePlaylistDelete(playlist.id)} />
          <div className='playlist-edit__button' onClick={handleRenameClick}>
            {settingName === false ? < FaPen title='Rename' /> : < FaCheck title='Save' />}
          </div>
        </div>
        }
      </div>
  );
}
