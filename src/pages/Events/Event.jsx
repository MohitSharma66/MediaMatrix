import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient';
import '../Home/Home.css';
import Gallery from '../../components/Events/Gallery/Gallery.jsx';
import DrawerAppBar from '../../components/Navbar/Navbar.jsx';
import EventAnimation from '../../components/Animation/Events/EventAnimation.jsx';

export default function Home() {
    const [animationFinished, setAnimationFinished] = useState(false);
    const [blackBackground, setBlackBackground] = useState(false);

    const onAnimationComplete = () => {
        setAnimationFinished(true);
        setBlackBackground(false);
    };

    return (
        <>
            {/* Background Gradient Layer */}
            <MeshGradientRenderer
                className="mesh-gradient-background"
                colors={[
                    "#000022",  // Deep navy black
                    "#000044",  // Dark midnight blue
                    "#000066",  // Rich dark blue
                    "#000088",  // Medium dark blue
                    "#001a99"   // Deep electric blue
                ]}
                speed={0.02} // Speed of the gradient movement
                wireframe={false} // Solid gradient look
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1, // Place it behind other content
                }}
            />

            <DrawerAppBar />
            
            {!animationFinished ? (
                <EventAnimation
                    setBlackBackground={setBlackBackground}
                    onAnimationComplete={onAnimationComplete}
                    style={{ height: '100vh' }}
                />
            ) : (
                <Gallery />
            )}
        </>
    );
}
