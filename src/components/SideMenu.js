import React, { useState } from 'react';
import SideMenuButton from './SideMenuButton';
import { FaAdjust, FaList } from 'react-icons/fa';
import ThemeContent from './ThemeContent';
import PlaylistsContent from './PlaylistsContent';

export default function SideMenu({ currentColorTheme, setCurrentColorTheme, colorThemes }) {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuContent, setMenuContent] = useState(null);

  return (
  <div className='side-menu'>
      <div className='side-menu__wrapper'>

          <div className='side-menu__content' style={{
            right: toggleMenu === true ? '4rem' : '-17rem'
          }}>
            {menuContent === 'theme' ? <ThemeContent currentColorTheme={currentColorTheme} setCurrentColorTheme={setCurrentColorTheme} colorThemes={colorThemes}/> : <PlaylistsContent />}
          </div>
          
          <div className='side-menu__layout'>
            <SideMenuButton icon={<FaAdjust />} content={'theme'} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setMenuContent={setMenuContent} menuContent={menuContent}/>
            <SideMenuButton icon={<FaList />} content={'playlist'} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} setMenuContent={setMenuContent} menuContent={menuContent}/>
          </div>
      </div>
  </div>
  );
}
