import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import AboutMediaMatrix from './components/AboutMediaMatrix.jsx';
import LogoName from './components/Home/LogoName/LogoName.jsx';
import Tracks from './components/Home/Tracks/Tracks.jsx';
import HomeAnimation from './components/HomeAnimation.jsx';
import LoadingPage from './components/LoadingPage.jsx';
import Navbar from './components/Navbar.jsx';
import './Home.css';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [blackBackground, setBlackBackground] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        AOS.init({ duration: 1000 });
        
        return () => clearTimeout(timer);
    }, []);

    const setBackgroundColor = () => {
        console.log('runs background');
        setBlackBackground(false); // Change to true to make the background black
    };

    const onAnimationComplete = () => {
        setAnimationFinished(true);
        setBackgroundColor();
    };

    return (
        <div className="home">
            {/* Background Image Layer */}
            <div className="background" />

            {loading ? (
                <LoadingPage />  
            ) : (
                <>
                    <Navbar />
                    {animationFinished === false && (
                        <HomeAnimation style={{backgroundColor: blackBackground ? 'black' : ''}} blackbackground={blackBackground} setBlackBackground={setBlackBackground} onAnimationComplete={onAnimationComplete}/>
                    )}
                    {animationFinished && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <LogoName />
                            <AboutMediaMatrix />
                            <div className="track-text">
                                TRACKS
                            </div>
                            <div className="marquee">
                                <Tracks />
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
