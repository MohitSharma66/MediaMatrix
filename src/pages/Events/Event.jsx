import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{ useEffect, useState } from 'react';
import { NeatGradient } from "@firecms/neat";
import '../Home/Home.css';
import Gallery from '../../components/Events/Gallery/Gallery.jsx';
import DrawerAppBar from '../../components/Navbar/Navbar.jsx';
import EventAnimation from "../../components/Animation/Events/EventAnimation.jsx"

export default function Home() {

    const [bgColor, setBgColor] = useState("my-canvas-class"); // Default class name
    const canvasRef = React.useRef(null);
    const gradientRef = React.useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            colors: [
                {
                    color: "#000022", // Deep navy black, very dark
                    enabled: true
                },
                {
                    color: "#000044", // Dark midnight blue with a hint of brightness
                    enabled: true
                },
                {
                    color: "#000066", // Rich dark blue
                    enabled: true
                },
                {
                    color: "#000088", // Medium dark blue with a stronger blue tone
                    enabled: true
                },
                {
                    color: "#001a99", // Deep electric blue, still intense but brighter
                    enabled: true
                }                
                  
              ]
              
              ,
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
            gradientRef.current?.destroy(); // Cleanup
        };
    }, [canvasRef.current]);

    const [blackBackground, setBlackBackground] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    const onAnimationComplete = () => {
        setAnimationFinished(true);
        setBlackBackground(false); // Change background after animation
    };

    return (
<>
            {/* Background Image Layer */}
            {/* <div className="background" /> */}
            <canvas
                className={bgColor}
                style={{
                    position: "fixed", // Keep the canvas fixed
                    top: 0,
                    left: 0,
                    height: "100vh", // Full height of the viewport
                    width: "100vw", // Full width of the viewport
                    zIndex: -1, // Behind other content
                }}
                ref={canvasRef}
            />
            
            <DrawerAppBar/>
            {!animationFinished ? ( // Render EventAnimation only if animation is not finished
                    <EventAnimation setBlackBackground={setBlackBackground} onAnimationComplete={onAnimationComplete} style={{height: '100vh'}}/>
                ):(

            <Gallery/>
            )}
            
            </>
            )
}
