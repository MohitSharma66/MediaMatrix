import { useEffect, useState } from 'react';
import AboutMediaMatrix from './components/AboutMediaMatrix.jsx';
import BroadcastBattlefieldCarousel from './components/BroadcastBattlefieldCarousel.jsx';
import HomeAnimation from './components/HomeAnimation.jsx';
import LoadingPage from './components/LoadingPage.jsx';
import LogoName from './components/LogoName.jsx';
import Navbar from './components/Navbar.jsx';
import Tracks from './components/Tracks.jsx';
import './Home.css';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [blackBackground, setBlackBackground] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);
    
        return () => clearTimeout(timer);
    }, []);

    const onAnimationComplete = () => {
        setAnimationFinished(true);
        setBlackBackground(false);
    };

    return (
        <div className="home" style={{ 
            position: 'relative', 
            backgroundColor: blackBackground ? 'black' : '', 
            transition: 'background-color 1s ease', 
            width: '100vw',  // Ensure full width
            //height: '100vh', // Ensure full height
            //overflow: 'hidden' // Prevent overflow
        }}>
              {/* Always render Navbar at the top */}
            {loading ? (
                <LoadingPage />  
            ) : (
                <>
                    <Navbar />
                    {animationFinished === false && (
                        <HomeAnimation setBlackBackground={setBlackBackground} onAnimationComplete={onAnimationComplete} />
                    )}
                    {animationFinished && (
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginTop: '5rem' }}>
                            <LogoName />
                            <AboutMediaMatrix />
                            <BroadcastBattlefieldCarousel />
                            <Tracks />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}