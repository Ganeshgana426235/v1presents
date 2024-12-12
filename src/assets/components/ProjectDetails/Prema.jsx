import React, { useState } from 'react';
import './prema.css';
import youtube from '../../Media/youtube.svg'
const Prema = () => {
  const [isSong, setSong] = useState(false);
  const [isMovie, setMovie] = useState(false);

  const handleSong = (e) => {
    e.preventDefault();
    setSong((prev) => !prev); // Toggle isSong state
  };

  const handleMovie = (e) => {
    e.preventDefault();
    setMovie((prev) => !prev); // Toggle isMovie state
  };

  return (
    <div className="prema">
      {/* Video Section */}
      <div className="premavideo">
        <iframe
          className="videoframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FsWk-3dV8sQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Details Section */}
      <div className="premadetails">
        <h1>2 Aksharala Prema</h1>
        <p className="premad">Shooting in progress...</p>
        <div className="premadiv">
          <div
            className="premadivmovie"
            onClick={handleMovie}
            style={{ cursor: 'pointer' }}
          >
            Movie
            {isMovie && (
              <div>
                <h3>Go to YouTube</h3>
                <a href="https://www.youtube.com/@V1_presents" ><img src={youtube}></img></a>
              </div>
            )}
          </div>
          <div
            className="premadivsong"
            onClick={handleSong}
            style={{ cursor: 'pointer' }}
          >
            Songs
            {isSong && (
              <div>
                <iframe
                  src="https://open.spotify.com/embed/album/6dASB2abEUnBWGfJiqYtLR"
                  width="300"
                  height="80"
                  allowtransparency="true"
                  allow="encrypted-media"
                  title="Spotify Album"
                ></iframe>
              </div>
            )}
          </div>
        </div>
        <p className="premad">
          <b>Actors:</b> Veerendra, Revanth <br />
          <b>Director:</b> Veerendra <br />
          <b>Music Director:</b> Sri Koti <br />
          <b>Writer:</b> Y Veerendra 
          
        </p>
      
      </div>
    
    
    </div>
  );
};

export default Prema;
