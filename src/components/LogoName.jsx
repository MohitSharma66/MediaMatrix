import React, { useEffect, useState } from 'react';
import './LogoName.css';

const LogoName = () => {
  const [daysToGo, setDaysToGo] = useState(0);

  useEffect(() => {
    const eventDate = new Date('2024-11-08T00:00:00');
    const calculateDaysToGo = () => {
      const now = new Date();
      const timeDiff = eventDate.getTime() - now.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysToGo(daysDiff);
    };

    calculateDaysToGo();
    const timer = setInterval(calculateDaysToGo, 86400000); // Update every 24 hours

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src='src\assets\Logo.png'
            alt="Media Matrix Logo"
            className="flip-card-logo"
          />
          <img
            src='src\assets\MEDIA MATRIX.png'
            alt="Media Matrix Text"
            className="flip-card-text"
          />
        </div>
        <div className="flip-card-back">
          <h2>Countdown to Event</h2>
          <p className="days-to-go">{daysToGo}</p>
          <p>Days to Go!</p>
        </div>
      </div>
    </div>
  );
};

export default LogoName