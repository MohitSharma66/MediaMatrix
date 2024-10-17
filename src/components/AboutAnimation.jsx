import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './AboutAnimation.css';

export default function AboutAnimation({ setBlackBackground }) {
    const [showInitialImages, setShowInitialImages] = useState(false);
    const [showRunning, setShowRunning] = useState(false);
    const [showMonster, setShowMonster] = useState(false);
    const [isBlackBackground, setIsBlackBackground] = useState(false); // State for black background

    useEffect(() => {
        // Show black background immediately and stay for 1 second
        setBlackBackground(true);
        const blackBgTimeout = setTimeout(() => {
            setBlackBackground(false);
            setShowInitialImages(true); // Show initial images after 1 second
        }, 1000);

        // Set the initial images to appear after 1 second
        const initialImagesTimeout = setTimeout(() => {
            setShowInitialImages(true);
        }, 1000);

        // Show Running image after 2 seconds
        const runningTimeout = setTimeout(() => {
            setShowRunning(true);
        }, 2000);

        // Hide Running and show Monster after 4 seconds
        const monsterTimeout = setTimeout(() => {
            setShowRunning(false);
            setShowMonster(true);
        }, 4000);

        // Hide Monster and change to black background after 6 seconds
        const blackBgAgainTimeout = setTimeout(() => {
            setShowMonster(false);
            setBlackBackground(true);
        }, 6000);

        // Reset black background after 7 seconds
        const resetBgTimeout = setTimeout(() => {
            setBlackBackground(false);
        }, 7000);

        // Cleanup timeouts on component unmount
        return () => {
            clearTimeout(blackBgTimeout);
            clearTimeout(initialImagesTimeout);
            clearTimeout(runningTimeout);
            clearTimeout(monsterTimeout);
            clearTimeout(blackBgAgainTimeout);
            clearTimeout(resetBgTimeout);
        };
    }, [setBlackBackground]);

    return (
        <div className="about-animation-container">
            {/* Render the initial images */}
            {showInitialImages && (
                <>
                    {/* Big Trees Image */}
                    <motion.img
                        src="src/assets/BigTreesDown.png"
                        alt="Big Trees Down"
                        className="big-trees"
                        initial={{ scale: 5, opacity: 0, y: "-100%" }}
                        animate={{ scale: 1.74, opacity: 1, y: "0%" }} // Positioned to start off-screen
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* Left Down Image */}
                    <motion.img
                        src="src/assets/LeftDown.png"
                        alt="Left Down"
                        className="left-down"
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* Right Down Image */}
                    <motion.img
                        src="src/assets/RightDown.png"
                        alt="Right Down"
                        className="right-down"
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </>
            )}

            {/* Render the Running image */}
            {showRunning && (
                <motion.img
                    src="src/assets/Running.png" // Ensure you have this image
                    alt="Running"
                    className="running"
                    initial={{ x: "-100%", opacity: 1 }}
                    animate={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }} // Runs from left to right
                />
            )}

            {/* Render the Monster image */}
            {showMonster && (
                <motion.img
                    src="src/assets/Monster.png"
                    alt="Monster"
                    className="monster"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }} // Fades in
                />
            )}
        </div>
    );
}
