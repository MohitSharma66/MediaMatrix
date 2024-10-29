import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMediaMatrix from '../../components/Home/About/AboutMediaMatrix.jsx';
import LogoName from '../../components/Home/LogoName/LogoName.jsx';
import LoadingPage from '../../components/Loading/LoadingPage.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Tracks from "../../components/Home/Tracks/Tracks.jsx";
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient';
import BasicModal from '../../components/Popups/Popups.jsx';
import './Home.css';
import ContactUs from '../../components/ContactUs/ContactUs.jsx';
import HomeAnimation from '../../components/Animation/Home/HomeAnimation.jsx';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [animationFinished, setAnimationFinished] = useState(false); // Set initial state to `false` to trigger animation
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onAnimationComplete = () => {
        setAnimationFinished(true); // Sets animation as finished once completed
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        AOS.init({ duration: 1000 });

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home">
            <div className="background" />
            <MeshGradientRenderer
                className="gradient"
                colors={["#200000", "#400000", "#5C0000", "#7F0000", "#990000"]}
                speed={0.02}
                wireframe={false}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1,
                }}
            />

            {loading ? (
                <LoadingPage />
            ) : (
                <>
                    <Navbar />
                    {!animationFinished ? (
                        <HomeAnimation 
                            onAnimationComplete={onAnimationComplete}
                            style={{ height: '100vh' }}
                        />
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <LogoName handleOpen={handleOpen} />
                            {open && <BasicModal handleClose={handleClose} open={open}/>}
                            <AboutMediaMatrix />
                            <div className="track-text">TRACKS</div>
                            <div className="marquee">
                                <Tracks />
                            </div>
                            <ContactUs />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
