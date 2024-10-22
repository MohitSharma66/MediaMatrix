import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import './AboutIIITNR.css'; //importing About IIITNR.css because of same classnames

AOS.init({once:true});
const AboutMediaMatrix = () => {

  return (
    <div>
<div className="contain div" id="About Us">
        <h1 className="text-center" data-aos="fade-up"
     data-aos-duration="6000" style={{fontSize:"2.2rem"}}>About Media Matrix</h1>
      <div className="mt-5 about-container">
        <div className="col-md-6 text-center p-container">
          <p className='about-p'  data-aos="fade-up"  data-aos-duration="3000">
          Media Matrix is a flagship event organized by the Media & IT Cell of IIIT-NR, bringing together creative minds and problem solvers 
          across multiple disciplines. With a diverse range of tracks such as Ad Making, Cryptic Hunt, Turing Test, Debate, eSports, Quiz, 
          Designathon, and Pitching, Media Matrix challenges participants to showcase their creativity, communication skills, analytical thinking, 
          and technical prowess. Whether it's crafting compelling narratives, solving complex puzzles, or designing innovative solutions, Media 
          Matrix offers a platform for individuals to push boundaries, think outside the box, and collaborate in exciting, fast-paced environments.
          Dive into Media Matrix and experience the intersection of creativity, media, and competition!
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AboutMediaMatrix;