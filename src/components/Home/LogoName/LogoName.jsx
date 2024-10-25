// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import React, { useEffect, useState } from 'react';
// import './LogoName.css';

// const LogoName = () => {
//   const [daysToGo, setDaysToGo] = useState(0);

//   useEffect(() => {
//     AOS.init(); // Initialize AOS
//     const eventDate = new Date('2024-11-08T00:00:00');
//     const calculateDaysToGo = () => {
//       const now = new Date();
//       const timeDiff = eventDate.getTime() - now.getTime();
//       const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
//       setDaysToGo(daysDiff);
//     };

//     calculateDaysToGo();
//     const timer = setInterval(calculateDaysToGo, 86400000); // Update every 24 hours

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flip-card" style={{height: '80vh', marginBottom: '5rem'}} data-aos="fade-up"> {/* Add AOS animation */}
//       <div className="flip-card-inner">
//         <div className="flip-card-front">
//           <img
//             src='src/assets/Logo.png'
//             alt="Media Matrix Logo"
//             className="flip-card-logo"
//             data-aos="zoom-in" 
//           />
//           <img
//             src='src/assets/MEDIA MATRIX.png'
//             alt="Media Matrix Text"
//             className="flip-card-text"
//             data-aos="zoom-in" 
//           />
//         </div>
//         <div className="flip-card-back">
//           <h1>Countdown to Event</h1>
//           <p className="days-to-go">{daysToGo}</p>
//           <h2>Days to Go!</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogoName;

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import './LogoName.css';

const TeamMember = ({ image, name, post, linkedin, insta }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [daysToGo, setDaysToGo] = useState(0);

  useEffect(() => {
    AOS.init(); // Initialize AOS
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

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="logoname" style={{height:"100svh", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card */}
      <div onClick={handleClick} className="container-front" style={{ height: '400px', cursor: "pointer" }}>
        <img
          src='/assets/Logo.png'
          alt="Media Matrix Logo"
          className="flip-card-logo"
          data-aos="zoom-in"
        />
        <img
          src='/assets/MEDIA MATRIX.png'
          alt="Media Matrix Text"
          className="flip-card-text"
          data-aos="zoom-in"
        />
      </div>

      {/* Back of the card */}
      <div onClick={handleClick} className="container-back" style={{ height: '400px', cursor: "pointer" }}>
      <h1>Countdown to Event</h1>
           <p className="days-to-go">{daysToGo}</p>
           <h2>Days to Go!</h2>
      </div>
    </ReactCardFlip>
    </div>
  );
};

export default TeamMember;
