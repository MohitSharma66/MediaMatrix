import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import images from "../../../data/EventData.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactUs from '../../ContactUs/ContactUs.jsx';
AOS.init({
  once: true
});
const Gallery = () => {

  const settings = {
    infinite:true,
    easing:'linear',
    autoplay:false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  ;

  return (
    <>
    <div className='Slider' id="gallery">
    <div data-aos="zoom-in" data-aos-duration="300"style={{ width: '86vw', margin: '0 auto'  }}  >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}   >
            <div className='boxed'   style={{ 
                boxSizing:'border-box', 
                gap:"10vh",
                border:"1px solid red",
                margin:"0 10px",
                borderRadius:"16px",
                padding:"5vh"
              }}>
            <img 
              src={image.img} 
              alt={`Slide ${index}`}
              className='slide-image'
              style={{ 
                boxSizing:'border-box',
                width: '50%',
                borderRadius: '0.1rem', 
                height:'50vh',
                objectFit: 'cover',
                border: '0.1rem solid red',
              }} 
            />
            <div className="slide-text">
                <div className="slide-title">{image.title}</div>
                <div className="slide-tex">{image.desc}</div>
                <div className="slide-tex">Date: {image.date}</div>
                <div className="slide-tex">Registration Fee: {image.fee}</div>
                <div className="slide-tex">PricePool: {image.price}</div>
                <div className="slide-tex">For Details Contact</div>
                <div className="slide-tex">{image.contact}</div>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    <ContactUs/>
    </>
  );
};

export default Gallery;