import { useState } from 'react';
import './About.css';
import AboutAnimation from './components/AboutAnimation.jsx';
import Navbar from './components/Navbar.jsx';

export default function About() {
    const [blackBackground, setBlackBackground] = useState(true);

    return (
        <div className='about'>
            <div style={{ backgroundColor: blackBackground ? 'black' : '', transition: 'background-color 1s ease'}}>
                <Navbar />
                <AboutAnimation setBlackBackground={setBlackBackground} /> 
            </div>
        </div>
        
    );
}
