import React from 'react';
import { FaExclamationTriangle } from "react-icons/fa";


function PlayError({ setIsError, setAudios }) {

    function handleDelete() {
        setAudios(prevAudios => {
            return prevAudios.filter(audio => !audio.error);
        });
        setIsError(false);
    }

  return (
    <div className="play-error">
        <div className="play-error__message-div">
          <div className="exclamation">
            < FaExclamationTriangle />
            <p>Error!</p>
          </div>
          <p className="play-error__message-paragraph">
            An error occoured with one of your audio files. That's probably due to an invalid audio link. Make sure the link you pass in links to an actual audio and add it again. Would you like do delete the invalid audio now?
          </p>
          <div className="buttons">
            <button className="button button__delete" onClick={handleDelete}>Delete now</button>
            <button className="button button__dismiss" onClick={() => setIsError(false)}>Dismiss</button>
          </div>
        </div>
    </div>
  )
}

export default PlayError