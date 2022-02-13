import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function ThemeContent({ currentColorTheme, colorThemes, handleThemeChange, toggleThemeSwitch, setToggleThemeSwitch, playlists, setPlaylists }) {

    function handleToggleThemeSwitch() {
        if (toggleThemeSwitch === false) {
            setPlaylists(playlists.map(playlist => (
                {...playlist, colorTheme: currentColorTheme}
            )))
        }
        setToggleThemeSwitch(!toggleThemeSwitch);
    }

  return (
  <div className='theme-content side-menu-instance'>
      <p>Color Themes</p>
      <div className='theme-content__wrapper'>
        <div className='theme-content__switch' onClick={handleToggleThemeSwitch}>
            <p>Set for all playlists</p>
            {toggleThemeSwitch === true && < FaCheck className='theme-content__switch--checker'/>}
        </div>
        {colorThemes.map((theme) => (
            <div className='theme-rect' key={theme.id} style={{
                background: `linear-gradient(-45deg, ${theme.themeOne} 0% 25%, ${theme.themeTwo} 25% 50%, ${theme.themeThree} 50% 75%, ${theme.themeFour} 75% 100%)`,
                opacity: currentColorTheme.id === theme.id ? 1 : 0.5
            }} onClick={() => handleThemeChange(theme)}>
                {
                currentColorTheme.id === theme.id && 
                <div className='check-indicator'>
                    < FaCheck />
                </div>
                }
            </div>
        ))}
      </div>
  </div>
  );
}
