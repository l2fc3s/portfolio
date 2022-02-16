import React from "react";
import "./Music.css";
import { MusicData } from "./MusicData";

const Music = () => {
  return (
    <>
      <div id="musicSection" className="music-section">
        <div className="music-header-section">
          <h1 className="music-header">Music</h1>
          <p className="music-description">
            Outside of coding, I'm a musician and producer. I play piano,
            guitar, and use software to record and create music. Primarily I
            enjoy making sample-based hip hop beats. Through this, I have
            developed a love for many genres of music, and enjoy collecting
            vinyl records.
          </p>
        </div>

        <div className="music-project-container">
          {MusicData.map((music) => {
            return (
              <div className="music-cards">
                <div className="image-container">
                  <a target="_blank" href={music.link}>
                    <img
                      className="music-image"
                      src={music.image}
                      alt={music.alt}
                    />

                    <div className="text-overlay">{music.text}</div>
                  </a>
                </div>

                <h3 className="music-title">{music.name}</h3>
                <p className="music-release">{music.released}</p>
                <p className="links">
                  <a target="_blank" href={music.link}>
                    Listen
                  </a>{" "}
                  or{" "}
                  <a target="_blank" href={music.link}>
                    Buy
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Music;
