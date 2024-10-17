import React, { useEffect, useState } from 'react';
import HomeAnimation from './components/HomeAnimation.jsx'; // Import HomeAnimation component
import LoadingPage from './components/LoadingPage.jsx';
import Navbar from './components/Navbar.jsx';
import './Home.css';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [blackBackground, setBlackBackground] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);
    
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ backgroundColor: blackBackground ? 'black' : '', transition: 'background-color 1s ease' }}>
            {loading ? (
                <LoadingPage />  
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Navbar /> 
                    <HomeAnimation setBlackBackground={setBlackBackground} /> 
                </div>
            )}
        </div>
    );
}
