import React from 'react'
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/Tracks/1.png";
import img2 from "../../../assets/Tracks/2.png";
import img3 from "../../../assets/Tracks/3.png";
import img4 from "../../../assets/Tracks/4.png";
import img5 from "../../../assets/Tracks/5.png";
import img6 from "../../../assets/Tracks/6.png";
import img7 from "../../../assets/Tracks/7.png";
import img8 from "../../../assets/Tracks/8.png";
import img9 from "../../../assets/Tracks/9.png";
import img10 from "../../../assets/Tracks/10.png";
import img11 from "../../../assets/Tracks/11.png";
import img12 from "../../../assets/Tracks/12.png";
import img13 from "../../../assets/Tracks/13.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./Tracks.css"
AOS.init({once: true}); 

const Tracks = () => {
  return (
    <div className="marquee">
    <div className="relay" data-aos="zoom-in" data-aos-delay="800">
    <div>
   <Marquee speed={100} delay={0} direction={"left"} autoFill={true}>
     <div className="image_wrapper">
       <img src={img1} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img2} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img3} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img4} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img5} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img6} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img7} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img8} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img9} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img10} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img11} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img12} alt="" />
     </div>
     <div className="image_wrapper">
       <img src={img13} alt="" />
     </div>
   </Marquee>
   </div>
   </div>
   </div>
  )
}

export default Tracks