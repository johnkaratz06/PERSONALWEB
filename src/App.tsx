import { useState, useEffect } from 'react';
import './App.css';
import TXT from './text'

const text = "cat IOANNIS_K_CV.txt ↲";
const speed = 50;

function App() {
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index <= text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
        setShowCursor(show => !show); // toggle cursor blink
      }, speed);
      return () => clearTimeout(timeout); // cleanup on unmount or update
    }
  }, [index]);

  return (
    <>
      <div id="typewriter">
        <h1>
          {text.substring(0, index)}
          {showCursor ? '_' : ' '}
        </h1>
      </div>
      <div style={{ height: '1em' }}></div>
      <p className="fade-in" style={{ animationDelay: '2s' }}>--This is the Curriculum Vitae of one Ioannis K.--</p>
      <div style={{ height: '0.5em' }}></div>
      <TXT />
      <div style={{ height: '1em' }}></div>
    </>
  );
}

export default App;
