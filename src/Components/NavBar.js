import my_song from "../utils/Night.mp3";
import React, { useState } from "react";
import "../Css/NavBar.css"

const NavBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(my_song));

  const play = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div id="header">
      <div id="sound">
        <i className="fab fa-soundcloud sound-cloud"></i>
        <span>sound</span>
        <div className="on-off">
          <span id="off">OFF</span>
          <span id="on">ON</span>
        </div>
      </div>
      <div className="btns-onatiner">
        <i className="fas fa-bars bars"></i>
        <i className="fas fa-times times"></i>
      </div>
    </div>
  );
};

export default NavBar;
