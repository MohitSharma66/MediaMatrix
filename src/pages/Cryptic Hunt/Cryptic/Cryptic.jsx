import React from 'react';
import './Cryptic.css'; 
import DrawerAppBar from '../../../components/Navbar/Navbar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Cryptic = () => {
  return (
    <>
      <div className="cryptic container-cryptic">
        <DrawerAppBar /> {/* Including Navbar component */}
        <Link to="/erZs5CmD5U3IM0M"><Button sx={{color:"white", backgroundColor:"black",zIndex:"100", fontSize:"30px",borderRadius:"10px",border:"2px solid white"}}>START</Button></Link>
        <div className="box">
<div className="cube-loader">
  <div className="cube-top"></div>
  <div className="cube-wrapper">
    <span className="cube-span" style={{"--i":0}}></span>
    <span className="cube-span" style={{"--i":1}}></span>
    <span className="cube-span" style={{"--i":2}}></span>
    <span className="cube-span" style={{"--i":3}}></span>
  </div>
</div>
         </div>
        <span style={{fontFamily:"MediaMatrix", fontSize:"40px"}}>CRYPTIC HUNT</span>
      </div>
    </>
  );
};

export default Cryptic;
