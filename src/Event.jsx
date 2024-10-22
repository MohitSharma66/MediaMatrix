import { useState } from 'react';
import './Event.css';
import EventAnimation from './components/EventAnimation.jsx';
import Navbar from './components/Navbar.jsx';

export default function About() {
    const [blackBackground, setBlackBackground] = useState(true);

    return (
        <div className='about'>
            <div style={{ backgroundColor: blackBackground ? 'black' : '', transition: 'background-color 1s ease'}}>
                <Navbar />
                <EventAnimation setBlackBackground={setBlackBackground} /> 
            </div>
        </div>
        
    );
}
