import { useState, useEffect } from 'react';

const ClickingGame = () => {
  const [clicks, setClicks] = useState(0);
  const [timer, setTimer] = useState(100);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0 || clicks >= 500) {
      setIsGameOver(true);
    }
  }, [timer, clicks]);

  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  return (
    <div>
      {isGameOver ? (
        <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>You Lost!</h1>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <h1>Clicks: {clicks}</h1>
          <h1>Time Left: {timer} seconds</h1>
          <button onClick={handleClick} style={{ fontSize: '2rem', padding: '1rem 2rem' }}>
            Click Me!
          </button>
        </div>
      )}
    </div>
  );
};

export default ClickingGame;
