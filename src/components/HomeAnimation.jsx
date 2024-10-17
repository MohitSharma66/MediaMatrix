import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './HomeAnimation.css';

export default function HomeAnimation({ setBlackBackground }) {
    const [showTreeTrunk, setShowTreeTrunk] = useState(false);
    const [showEverything, setShowEverything] = useState(false); // Controls visibility of all elements
    const [showKids, setShowKids] = useState(false); // State for kids animation
    const [treesExit, setTreesExit] = useState(false); // State for tree exit animation
    const [showTrees, setShowTrees] = useState(true); // State for BigTrees and side trees
    const [kidsReturn, setKidsReturn] = useState(false); // State for kids reappearing
    const [alienAppears, setAlienAppears] = useState(false); // State for alien animation

    useEffect(() => {
        // Show kids animation after 1.5 seconds of tree visibility
        const kidsTimeout = setTimeout(() => {
            setShowKids(true); // Show kids animation
        }, 1500); // Delay for 1.5 seconds (trees appear first)
    
        // Start trees exit after kids exit
        const treesExitTimeout = setTimeout(() => {
            setTreesExit(true); // Start tree exit animation
        }, 3500); // Trigger tree exit after kids leave
    
        // Hide trees and proceed with the rest of the animation
        const hideElementsTimeout = setTimeout(() => {
            setShowTrees(false); // Hide trees
            setShowEverything(true);
            setKidsReturn(true); // Start showing the remaining elements
        }, 4500); // Hide trees after their upward exit animation
    
        // Alien appears after kids have been visible for 2 seconds
        const alienAppearTimeout = setTimeout(() => {
            setAlienAppears(true); // Alien appears from the top
        }, 8000); // Now appears 9.5 seconds after the start, giving the kids 2 seconds of visibility
    
        // Trigger the black background after alien animation finishes and stays for 0.5 seconds
        const blackBackgroundTimeout = setTimeout(() => {
            setKidsReturn(false); // Make kids disappear
            setAlienAppears(false); // Make alien disappear
            setShowEverything(false); // Hide all elements (alien, kids, path)
            setBlackBackground(true);  // Update background to black in Home component
        }, 11000); // Adjusted timing for the rest of the sequence
    
        // Show the tree trunk image with flickering effect after the black background
        const treeTrunkTimeout = setTimeout(() => {
            setShowTreeTrunk(true); // Show tree trunk
        }, 11500); // Show tree trunk after 0.5 seconds of black background
    
        // Reset everything (tree trunk, black background) after the flicker
        const resetTimeout = setTimeout(() => {
            setShowTreeTrunk(false); // Hide tree trunk
            setBlackBackground(false); // Remove black background
        }, 14500); // Hide everything after 12 seconds
    
        // Cleanup timeouts on component unmount
        return () => {
            clearTimeout(kidsTimeout);
            clearTimeout(treesExitTimeout);
            clearTimeout(hideElementsTimeout);
            clearTimeout(alienAppearTimeout);
            clearTimeout(blackBackgroundTimeout);
            clearTimeout(treeTrunkTimeout);
            clearTimeout(resetTimeout);
        };
    }, [setBlackBackground]);

    return (
        <div className="animation-container">
            {/* BigTrees, Right, and Left images animation */}
            {showTrees && (
                <>
                    <motion.img
                        src="src/assets/BigTrees.png"
                        alt="Big Trees"
                        className="big-trees"
                        initial={{ y: '200vh' }} // Start from below
                        animate={{ y: treesExit ? '-200vh' : '0vh' }} // Move up when exiting
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="src/assets/Left.png"
                        alt="Left Tree"
                        className="left-tree"
                        initial={{ y: '200vh' }} // Start from below
                        animate={{ y: treesExit ? '-200vh' : '48vh' }} // Move up when exiting
                        transition={{ duration: 1.5, ease: "easeInOut" }} // Delay for 1 second
                    />
                    <motion.img
                        src="src/assets/Right.png"
                        alt="Right Tree"
                        className="right-tree"
                        initial={{ y: '200vh' }} // Start from below
                        animate={{ y: treesExit ? '-200vh' : '3vh' }} // Move up when exiting
                        transition={{ duration: 1.5, ease: "easeInOut" }} // Delay for 1 second
                    />
                </>
            )}

            {/* Kids image animation (enter from left, stay, and exit to right) */}
            {showKids && (
                <motion.img
                    src="src/assets/kids.png"
                    alt="Kids"
                    className="kids"
                    initial={{ x: '-100vw' }} // Start from the left
                    animate={{ x: ['-100vw', '0vw', '100vw'] }} // Move to center, then exit to right
                    transition={{
                        duration: 3, // Total duration for entering, staying, and exiting
                        ease: "easeInOut",
                        times: [0, 0.5, 1] // Control timing of entry, stay, and exit
                    }}
                />
            )}

            {/* Kids reappearing when alien shows up */}
            {kidsReturn && (
                <>
                    <motion.img
                        src="src/assets/kids.png"
                        alt="Kids"
                        className="kids"
                        initial={{ x: '-100vw' }} // Start from the left again
                        animate={{ x: ['-100vw', '0vw'] }} // Move to center
                        transition={{
                            duration: 3, // Duration for re-entering and staying
                            ease: "easeInOut",
                            times: [0, 0.5, 2.5],
                        }}
                    />
                    <motion.img 
                        src="src/assets/path.png" 
                        alt="Path" 
                        className="path"
                        initial={{ y: '30vh' }} // Path starts below
                        animate={{ y: '10vh' }} // Moves up slightly below the kids
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />
                </>
            )}

            {/* Alien appears from top */}
            {alienAppears && (
                <motion.img
                    src="src/assets/CloseAlien.png"
                    alt="Alien"
                    className="alien"
                    initial={{ y: '-30vh', scale: 1.8, opacity: 0.5 }} // Start above, bigger, and slightly transparent
                    animate={{ y: '-5vh', scale: 1, opacity: 1 }} // Move down and darken
                    transition={{
                        duration: 3,        // Animation duration
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={() => {
                        // Alien and kids stay together for 0.5 seconds
                        setTimeout(() => {
                            setAlienAppears(false);
                        }, 1000);
                    }}
                />
            )}

            {/* Tree trunk image flickering animation */}
            {showTreeTrunk && (
                <motion.img
                    src="src/assets/treetrunk.png"
                    alt="Tree Trunk"
                    className="treetrunk"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0] }} // Flickering effect
                    transition={{
                        duration: 3, // Total duration of the flicker
                        ease: "easeInOut"
                    }}
                />
            )}
        </div>
    );
}
