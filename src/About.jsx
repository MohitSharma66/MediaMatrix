import { useState } from 'react';
import './About.css';
import AboutAnimation from './components/AboutAnimation.jsx';
import Navbar from './components/Navbar.jsx';

export default function About() {
    const [blackBackground, setBlackBackground] = useState(false);

    return (
        <div style={{ backgroundColor: blackBackground ? 'black' : '', transition: 'background-color 1s ease', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Navbar />
            <AboutAnimation setBlackBackground={setBlackBackground} /> 
        </div>
    );
}
