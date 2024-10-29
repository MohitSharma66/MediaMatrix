import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import CardText from "../../../assets/Home_Img/MEDIA MATRIX.png"
import CardLogo from "../../../assets/Home_Img/Logo.png"
import './LogoName.css';
import { Button } from '@mui/material';

const TeamMember = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    AOS.init(); // Initialize AOS
    const eventDate = new Date('2024-11-08T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const timeDiff = eventDate.getTime() - now.getTime();

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="logoname" style={{height:"100svh", display:"flex", alignItems:"center", width:"100%", justifyContent:"center", marginTop:"10px", zIndex:"100"}}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        <div onClick={handleClick} className="container-front" style={{ height: '400px', cursor: "pointer" }}>
          <img
            src={CardLogo}
            alt="Media Matrix Logo"
            className="flip-card-logo"
            data-aos="zoom-in"
          />
          <img
            src={CardText}
            alt="Media Matrix Text"
            className="flip-card-text"
            data-aos="zoom-in"
          />
          <Button
            sx={{border:"2px solid red",color:"white", fontWeight:"700",padding:"10px", marginTop:"20px", fontFamily:"Poppins", borderRadius:"8px"}}
            onClick={props.handleOpen}  // Updated here to directly call handleOpen from props
          >
            Register
          </Button>
        </div>

        {/* Back of the card */}
        <div onClick={handleClick} className="container-back" style={{ height: '400px', cursor: "pointer" }}>
          <h1>Countdown to Event</h1>
          <p className="days-to-go">
            {`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
          </p>
          <h2>Days to Go!</h2>
        </div>
      </ReactCardFlip>
      <span className="cover" style={{height:"30px", width:"50px", zIndex:"2147483647", background:"black", color:"white", position:"fixed", bottom:"5px", right:"5px", borderRadius:"8px", border:"2px solid red" }}></span>
    </div>
  );
};

export default TeamMember;
