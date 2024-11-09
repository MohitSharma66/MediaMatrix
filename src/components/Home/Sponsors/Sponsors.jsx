import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/Sponsors/CanaraBank.png";
import img2 from "../../../assets/Sponsors/CRGB.png";
import img3 from "../../../assets/Sponsors/ExactSpace.png";
import img4 from "../../../assets/Sponsors/LIC.png";
import "./Sponsors.css";

AOS.init({ once: true });

const Sponsors = () => {
  return (
    <div className="marquee">
      <div className="relay" data-aos="zoom-in" data-aos-delay="800">
        <div>
          <Marquee speed={100} delay={0} direction={"left"} autoFill={true}>
            <div className="image_wrapper">
              <h1 className="glow">Banking Partner</h1>
              <img src={img1} alt="Canara Bank" />
            </div>
            <div className="image_wrapper">
              <h1 className="glow">Elite Sponsor</h1>
              <img src={img2} alt="CRGB" />
            </div>
            <div className="image_wrapper">
              <h1 className="glow">Gold Sponsor</h1>
              <img src={img3} alt="Exact Space" />
            </div>
            <div className="image_wrapper">
              <h1 className="glow">Silver Sponsor</h1>
              <img src={img4} alt="LIC" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
