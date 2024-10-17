import React, { useEffect, useState } from 'react';
import HomeAnimation from './components/HomeAnimation.jsx'; // Import HomeAnimation component
import LoadingPage from './components/LoadingPage.jsx';
import Navbar from './components/Navbar.jsx';
import './Home.css';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [blackBackground, setBlackBackground] = useState(false); // State to manage the black background

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);
    
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ backgroundColor: blackBackground ? 'black' : '', transition: 'background-color 1s ease' }}>
            {loading ? (
                <LoadingPage />  // Show loading page while the timer is running
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Navbar />  {/* Keep Navbar at the top */}
                    {/* Pass the setBlackBackground function to HomeAnimation */}
                    <HomeAnimation setBlackBackground={setBlackBackground} /> 
                </div>
            )}
        </div>
    );
}
