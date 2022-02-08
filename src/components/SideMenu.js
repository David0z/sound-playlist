import React, { useState } from 'react';
import SideMenuButton from './SideMenuButton';
import { FaAdjust, FaList } from 'react-icons/fa';
import ThemeContent from './ThemeContent';
import PlaylistsContent from './PlaylistsContent';

export default function SideMenu({ currentColorTheme, setCurrentColorTheme, colorThemes, playlists, setPlaylists, handlePlaylistClick, handleThemeChange, handleAddPlaylist, handlePlaylistDelete, toggleThemeSwitch, setToggleThemeSwitch, settingName, setSettingName }) {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuContent, setMenuContent] = useState(null);

  return (
  <div className='side-menu'>
      <div className='side-menu__wrapper'>

          <div className='side-menu__content' style={{
            right: toggleMenu === true ? '4rem' : '-17rem'
          }}>
            {menuContent === 'theme' ? <ThemeContent currentColorTheme={currentColorTheme} setCurrentColorTheme={setCurrentColorTheme} colorThemes={colorThemes} handleThemeChange={handleThemeChange} toggleThemeSwitch={toggleThemeSwitch} setToggleThemeSwitch={setToggleThemeSwitch}/> : <PlaylistsContent playlists={playlists} setPlaylists={setPlaylists} handlePlaylistClick={handlePlaylistClick} handleAddPlaylist={handleAddPlaylist} handlePlaylistDelete={handlePlaylistDelete} settingName={settingName} setSettingName={setSettingName}/>}
          </div>
          
          <div className='side-menu__layout'>
            <SideMenuButton icon={<FaAdjust />} content={'theme'} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setMenuContent={setMenuContent} menuContent={menuContent} settingName={settingName} setSettingName={setSettingName} />
            <SideMenuButton icon={<FaList />} content={'playlist'} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setMenuContent={setMenuContent} menuContent={menuContent} settingName={settingName} setSettingName={setSettingName} />
          </div>
      </div>
  </div>
  );
}
