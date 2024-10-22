import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import './AboutIIITNR.css';

AOS.init({once:true});
const About = () => {

  return (
    <div>
<div className="contain div" id="About Us">
        <h1 className="text-center" data-aos="fade-up"
     data-aos-duration="6000" style={{fontSize:"2.2rem"}}>About IIITNR</h1>
      <div className="mt-5 about-container">
        <div className="col-md-6 text-center p-container">
          <p className='about-p'  data-aos="fade-up"  data-aos-duration="3000">
          The International Institute of Information Technology, Naya Raipur (IIIT-NR), established by the Government of Chhattisgarh in 
            collaboration with NTPC, is a prestigious institution recognized for its academic excellence in Information Technology (IT) and
             related fields. The institute aims to foster higher education, research, and innovation, empowering students to address real-world 
             challenges through a blend of knowledge and entrepreneurial skills. Renowned for its cutting-edge academic programs, IIIT-NR is 
             committed to nurturing an environment of innovation and excellence. The institute has received several notable accolades, including 
             the ARIIA Ranking 2021, recognizing its efforts in promoting innovation and entrepreneurship. Additionally, IIIT-NR has been awarded 
             a four-star rating by the Institution Innovation Council (IIC), further cementing its status as a leader in research and development.
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default About;