import React from 'react';

export default function SideMenuButton({ icon, content, toggleMenu, setToggleMenu, setMenuContent, menuContent }) {

  function sideMenuButtonClick() {
    setMenuContent(content);
    if (toggleMenu === false) {
      setToggleMenu(true);
    }

    if (menuContent === content) {
      setToggleMenu(!toggleMenu);
    }
  }

  return (
      <button className='side-menu__button' onClick={sideMenuButtonClick} style={{
        backgroundColor: (menuContent === content && toggleMenu === true) ? 'var(--theme-four)' : 'var(--theme-three)'
      }}>
          {icon}
      </button>
  );
}
