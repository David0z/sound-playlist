import React from 'react';

export default function TopMenu({ isEditing, setIsEditing}) {

  function handleEditing() {
    setIsEditing(!isEditing);
  }

  return (
      <form className='menu menu__top'>
          <div className='line'>
            <input className='input' type="text" placeholder='Paste your audio URL here...' required />
            <button className='button add' type='submit'>Add new Audio file</button>
          </div>
          <div className='line'>
            <input className='input' type="text" placeholder='Type in a new audio title...' required />
            <button className='button edit' type='button' onClick={handleEditing}>{
              isEditing === false ? 'Edit my playlist' : 'Save'
            }</button>
          </div>
      </form>
  );
}
