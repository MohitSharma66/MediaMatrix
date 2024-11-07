import React from 'react';
import '../Cryptic/Cryptic.css';
import "./Level2.css";
import DrawerAppBar from '../../../components/Navbar/Navbar';
import Level2Audio from "../../../assets/Audio/Level2.wav";
import { Button } from '@mui/material';

const Level2 = () => {
  return (
    <div className='cryptic container-cryptic'>
      <DrawerAppBar />
      <div className="level2-container">
        {/* Audio player with controls */}
        <div class="loader2">
  <div class="box2">
    <div class="logo">
    </div>
  </div>
  <div class="box2"></div>
  <div class="box2"></div>
  <div class="box2"></div>
  <div class="box2"></div>
</div>
<div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"10px"}}>
        <audio controls>
          <source src={Level2Audio} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
        {/* Download link for the audio file */}
        <a href={Level2Audio} download="Level2Audio.wav" className="download-link" style={{color:"white", border:"2px solid white", padding:"5px", borderRadius:"8px"}}>
          Download Audio
        </a>
      </div>      
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
      <div className='h1'>Code for Level 1: Wheeler's Basement</div>
      <div className='h1'>Level 2:</div>
      <div className='h1'>Signals from the Beyond</div>
      <div className='h1'>Find a way to reach Level 3</div>
      </div>
    </div>
  );
};

export default Level2;
