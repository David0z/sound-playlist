import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function ThemeContent({ currentColorTheme, setCurrentColorTheme, colorThemes }) {

    function handleThemeChange(theme) {
        if (currentColorTheme === theme) {
            return;
        }
        setCurrentColorTheme(theme);
    }

  return (
  <div className='theme-content'>
      <p>Color Themes:</p>
      <div className='theme-content__wrapper'>
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
