import React from 'react';
import DrawerAppBar from '../../../components/Navbar/Navbar';
import "./Level5.css";
import image from "../../../assets/ST.png"

const Level5 = () => {
  const downloadImage = () => {
    const imageUrl = image;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'downloaded-image.jpg'; // Specify the filename
    link.click();
  };

  return (
    <div className='cryptic container-cryptic' style={{color:"blue", fontFamily:"MediaMatrix"}}>
      <DrawerAppBar />
      To uncover what’s hidden in Hawkins, you’ll need to dig deeper into the Color. The fifth layer holds the key, where things start to shift... just like the Upside Down.
      <div className="l3">CLUE:</div>
      <div className="l3">ESCAPE HAWKINS</div>
      <div className="l3">THE CONCLUSION:</div>
      <div className="l3">FINAL LEVEL</div>

      <div className='download-container' style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <img src={image} alt="Level5" className="image-preview" height="100px" width="100px" />
        <button onClick={downloadImage} className="download-button">Download Image</button>
      </div>
    </div>
  );
};

export default Level5;
