import { useState } from 'react';
import './Event.css';
import AboutMediaMatrix from './components/AboutMediaMatrix.jsx';
import EventAnimation from './components/EventAnimation.jsx';
import Navbar from './components/Navbar.jsx';

export default function Event() {
    const [blackBackground, setBlackBackground] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    const onAnimationComplete = () => {
        setAnimationFinished(true);
        setBlackBackground(false); // Change background after animation
    };

    return (
        <div className='about'>
            <div style={{ backgroundColor: blackBackground ? 'black' : '', transition: 'background-color 1s ease', width: '100vw',  // Ensure full width
            height: '100vh', // Ensure full height
            overflow: 'hidden'}}>
                <Navbar />
                {!animationFinished ? ( // Render EventAnimation only if animation is not finished
                    <EventAnimation setBlackBackground={setBlackBackground} onAnimationComplete={onAnimationComplete} style={{height: '100vh'}}/>
                ) : (
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <AboutMediaMatrix />
                    </div>
                )}
            </div>
        </div>
    );
}