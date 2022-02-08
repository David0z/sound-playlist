import React from 'react';

export default function SideMenuButton({ icon, content, toggleMenu, setToggleMenu, setMenuContent, menuContent, settingName, setSettingName }) {

  function sideMenuButtonClick() {
    setMenuContent(content);
    if (toggleMenu === false) {
      setToggleMenu(true);
    }

    if (menuContent === content) {
      setToggleMenu(!toggleMenu);
    }

    if (settingName === true) {
      setSettingName(false);
    }
  }

  return (
      <button className='side-menu__button' onClick={sideMenuButtonClick} style={{
        backgroundColor: (menuContent === content && toggleMenu === true) ? 'var(--theme-four)' : 'var(--theme-three)'
      }} title={content[0].toUpperCase() + content.slice(1, content.length)}>
          {icon}
      </button>
  );
}
