import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMediaMatrix from '../../components/Home/About/AboutMediaMatrix.jsx';
import LogoName from '../../components/Home/LogoName/LogoName.jsx';
import LoadingPage from '../../components/Loading/LoadingPage.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Tracks from "../../components/Home/Tracks/Tracks.jsx";
import { NeatGradient } from "@firecms/neat";
import BasicModal from '../../components/Popups/Popups.jsx';
import './Home.css';

export default function Home() {
    const [bgColor] = useState("my-canvas-class");
    const canvasRef = useRef(null);
    const gradientRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [animationFinished, setAnimationFinished] = useState(true);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (!canvasRef.current) return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            colors: [
                { color: "#200000", enabled: true },
                { color: "#400000", enabled: true },
                { color: "#5C0000", enabled: true },
                { color: "#7F0000", enabled: true },
                { color: "#990000", enabled: true }
            ],
            speed: 8,
            horizontalPressure: 2,
            verticalPressure: 5,
            waveFrequencyX: 2,
            waveFrequencyY: 4,
            waveAmplitude: 3,
            shadows: 7,
            highlights: 10,
            colorBrightness: 1,
            colorSaturation: 1,
            wireframe: false,
            colorBlending: 7,
            backgroundColor: "#9500E6",
            backgroundAlpha: 1,
            resolution: 1
        });

        return () => {
            gradientRef.current?.destroy();  // Cleanup on unmount
        };
    }, []);

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
            <canvas
                className={bgColor}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    width: "100vw",
                    zIndex: -1
                }}
                ref={canvasRef}
            />

            {loading ? (
                <LoadingPage />
            ) : (
                <>
                    <Navbar />
                    {animationFinished && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <LogoName handleOpen={handleOpen} />
                            {open && <BasicModal handleClose={handleClose} open={open}/>}  {/* Conditionally render popup */}
                            <AboutMediaMatrix />
                            <div className="track-text">TRACKS</div>
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
