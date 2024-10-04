import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CreateEvent from './components/CreateEvent';
import FindEvents from './components/FindEvents';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const [soundPlayed, setSoundPlayed] = useState(false); // Track if sound has been played

  const playSound = useCallback(() => {
    if (!soundPlayed) {
      const tudumSound = new Audio(`${process.env.PUBLIC_URL}/tudum.mp3`);
      tudumSound.play().catch(error => {
        console.error("Error playing sound:", error);
      });
      setSoundPlayed(true);
    }
  }, [soundPlayed]);

  const handleAnimationEnd = () => {
    setLoading(false);
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      playSound(); // Play sound on first interaction
      window.removeEventListener('click', handleUserInteraction); // Remove listener after first interaction
    };

    // Attach event listener to handle user interaction
    window.addEventListener('click', handleUserInteraction);
    
    return () => {
      window.removeEventListener('click', handleUserInteraction); // Clean up the event listener
    };
  }, [playSound]); // Add playSound as a dependency
  
  return (
    <Router>
      {loading && <LoadingAnimation onAnimationEnd={handleAnimationEnd} />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/find-events" element={<FindEvents />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
