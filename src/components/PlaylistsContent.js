import React, { useState } from 'react';
import PlaylistEditRect from './PlaylistEditRect';
import { FaPlus } from 'react-icons/fa';

export default function PlaylistsContent({ playlists, setPlaylists,handlePlaylistClick, handleAddPlaylist, handlePlaylistDelete, settingName, setSettingName }) {

  return (
  <div className='playlists-content side-menu-instance'>
    <p>Playlists</p>
    <div className='playlists-content__wrapper'>
      {playlists.map(playlist => (
        < PlaylistEditRect playlists={playlists} setPlaylists={setPlaylists} handlePlaylistClick={handlePlaylistClick} handlePlaylistDelete={handlePlaylistDelete} key={playlist.id} playlist={playlist} settingName={settingName} setSettingName={setSettingName} />
      ))}
      <div className='add-wrapper'>
        < FaPlus className='add-wrapper__button' title='Add New Playlist' onClick={handleAddPlaylist}/>
      </div>
    </div>
  </div>
  );
}
