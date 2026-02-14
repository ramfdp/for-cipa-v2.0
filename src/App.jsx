import React, { useState, useRef } from 'react';
import Flower from './Flower';

function App() {
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.error("Play failed", e));
    }
    setStarted(true);
  };

  return (
    <>
      {!started && (
        <div className="start-overlay" onClick={handleStart}>
          <div className="content">
            <h1>buat kamu cipa 🌹</h1>
            <p>klik/pencet dimana aja yaaa, jangan lupa di scroll</p>
          </div>
        </div>
      )}
      
      <audio ref={audioRef} loop preload="auto">
         <source src="/stuck_lany.mp3" type="audio/mpeg" />
      </audio>

      {started && <Flower />}
    </>
  );
}

export default App;
