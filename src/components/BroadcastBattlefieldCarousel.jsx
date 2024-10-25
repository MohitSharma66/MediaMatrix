import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes both Bootstrap JS and Popper.js
import React, { useEffect } from 'react';
import './Carousel.css';

const BroadcastBattlefieldCarousel = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="color" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <img 
        src="src/assets/EventsHeading.png" 
        alt="Text" 
        style={{ height: '20rem', width: '10rem', transform: 'rotate(90deg)', margin: '0 auto' }} 
        data-aos="fade-down" // Add AOS animation
      />
      
      <div id="carouselExampleFade" className="carousel slide carousel-fade mx-auto" style={{ maxWidth: '70em', display: 'flex', justifyContent: 'center', alignItems: 'center' }} data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* First carousel item */}
          <div className="carousel-item active" data-aos="fade-up">
            <div className="d-flex" style={{ background: 'transparent', border: '3px solid #001233', borderRadius: '10px', height: '25rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}>
              <img src='src/assets/Event.png' alt="Event" className="d-inline" />
              <div className="d-flex flex-column align-items-start" style={{ paddingLeft: '2rem', textAlign: 'left' }}>
                <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bold', paddingTop: '1rem'}}>BROADCAST BATTLEFIELD</h1>
                <p style={{ color: '#fff', fontSize: '1.2rem' }}>Teams of three will participate in a dynamic three-round competition, showcasing innovative business ideas and entrepreneurial spirit...</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Date</b> - 9th November</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Registration Fee</b>: ₹250 per person</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Prize Pool</b>: ₹6000</p>
                <p style={{ color: '#fff', fontSize: '1.2rem' }}>For details Contact</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Thakur Mahima Nuruti - 8817233661</b></p>
              </div>
            </div>
          </div>

          {/* Second carousel item */}
          <div className="carousel-item" data-aos="fade-up">
            <div className="d-flex" style={{ background: 'transparent', border: '3px solid #001233', borderRadius: '10px', height: '25rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}>
              <img src='src/assets/Event.png' alt="Event" className="d-inline" />
              <div className="d-flex flex-column align-items-start" style={{ paddingLeft: '2rem', textAlign: 'left' }}>
                <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bold', paddingTop: '1rem'}}>INNOVATION SHOWCASE</h1>
                <p style={{ color: '#fff', fontSize: '1.2rem' }}>An exhibition event where startups and young entrepreneurs will showcase their products and prototypes...</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Date</b> - 15th November</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Registration Fee</b>: ₹300 per team</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Prize Pool</b>: ₹10,000</p>
                <p style={{ color: '#fff', fontSize: '1.2rem' }}>For details Contact</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Ravi Pratap Singh - 9845623789</b></p>
              </div>
            </div>
          </div>

          {/* Third carousel item */}
          <div className="carousel-item" data-aos="fade-up">
            <div className="d-flex" style={{ background: 'transparent', border: '3px solid #001233', borderRadius: '10px', height: '25rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}>
              <img src='src/assets/Event.png' alt="Event" className="d-inline" />
              <div className="d-flex flex-column align-items-start" style={{ paddingLeft: '2rem', textAlign: 'left' }}>
                <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bold', paddingTop: '1rem'}}>CODE HACKATHON</h1>
                <p style={{ color: '#fff', fontSize: '1.2rem' }}>A 24-hour coding competition where teams of developers will tackle real-world problems...</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Date</b> - 21st November</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Registration Fee</b>: ₹400 per team</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Prize Pool</b>: ₹15,000</p>
                <p style={{ color: '#fff', fontSize: '1.2rem' }}>For details Contact</p>
                <p style={{ color: '#fff', fontSize: '1rem' }}><b>Anusha Desai - 9876543210</b></p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev" aria-hidden="true">
            <img src="src/assets/Arrow2.png" className='arrowLeft' style={{transform: 'rotate(90deg)', width: '4rem', height: '4rem', position: 'absolute', top: '50%', left: '-4rem'}} alt="Arrow"/>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next" aria-hidden="true">
            <img src="src/assets/Arrow.png" className='arrowRight' style={{transform: 'rotate(90deg)', width: '4rem', height: '4rem', position: 'absolute', top: '50%', right: '-4rem'}} alt="Arrow"/>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BroadcastBattlefieldCarousel;
