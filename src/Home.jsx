import { useEffect, useState } from 'react';
import Animation from './components/Animation.jsx';
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
        <div style={{ position: 'relative', backgroundColor: blackBackground ? 'black' : '', transition: 'background-color 1s ease', height: 'auto' }}>
            {loading ? (
                <LoadingPage />  
            ) : (
                <>
                    <Animation setBlackBackground={setBlackBackground} />
                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Navbar />
                    </div>
                </>
            )}
        </div>
    );
}