import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './HomeAnimation.css';

export default function HomeAnimation({ setBlackBackground }) {
    const [showTreeTrunk, setShowTreeTrunk] = useState(false);
    const [showEverything, setShowEverything] = useState(false); 
    const [showKids, setShowKids] = useState(false); 
    const [treesExit, setTreesExit] = useState(false); 
    const [showTrees, setShowTrees] = useState(true); 
    const [kidsReturn, setKidsReturn] = useState(false); 
    const [alienAppears, setAlienAppears] = useState(false); 

    useEffect(() => {
        const kidsTimeout = setTimeout(() => {
            setShowKids(true); 
        }, 1500); 
    
        const treesExitTimeout = setTimeout(() => {
            setTreesExit(true);
            setKidsReturn(true);
        }, 3500); 
    
        const hideElementsTimeout = setTimeout(() => {
            setShowTrees(false); 
            setShowEverything(true); 
        }, 4500); 
    
        const alienAppearTimeout = setTimeout(() => {
            setAlienAppears(true); 
        }, 7000); 
    
        const blackBackgroundTimeout = setTimeout(() => {
            setKidsReturn(false); 
            setAlienAppears(false); 
            setShowEverything(false); 
            setBlackBackground(true);  
        }, 10000); 
    
        const treeTrunkTimeout = setTimeout(() => {
            setShowTreeTrunk(true); 
        }, 11000);
    
        const resetTimeout = setTimeout(() => {
            setShowTreeTrunk(false); 
            setBlackBackground(false); 
        }, 14000); 
    
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
            {showTrees && (
                <>
                    <motion.img
                        src="src/assets/BigTrees.png"
                        alt="Big Trees"
                        className="big-trees"
                        initial={{ scale: 2 }} // Start big (not visible)
                        animate={{ scale: treesExit ? 3 : 1 }} // Shrinks to normal size
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="src/assets/Left.png"
                        alt="Left Tree"
                        className="left-tree"
                        initial={{ x: '-100vw' }} // Start from the left
                        animate={{ x: treesExit ? '-100vw' : '0vw' }} // Moves in and exits the same way
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                    <motion.img
                        src="src/assets/Right.png"
                        alt="Right Tree"
                        className="right-tree"
                        initial={{ x: '100vw' }} // Start from the right
                        animate={{ x: treesExit ? '100vw' : '0vw' }} // Moves in and exits the same way
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                </>
            )}

            {showKids && (
                <motion.img
                    src="src/assets/Cycle.png"
                    alt="Cycle"
                    className="Cycle"
                    initial={{ x: '-100vw', y: '35vh'}} 
                    animate={{ x: ['-100vw', '0vw', '100vw'] }} 
                    transition={{
                        duration: 3, 
                        ease: "easeInOut",
                        times: [0, 0.5, 1] 
                    }}
                />
            )}

            {kidsReturn && (
                <>
                    <motion.img
                        src="src/assets/kids.png"
                        alt="Kids"
                        className="kids"
                        initial={{ y: '100vh' }} 
                        animate={{ y: ['100vh', '0vh'] }} 
                        transition={{
                            duration: 3, 
                            ease: "easeInOut",
                            times: [0, 0.5, 2.5],
                        }}
                    />
                    <motion.img 
                        src="src/assets/path.png" 
                        alt="Path" 
                        className="path"
                        initial={{ y: '30vh' }} 
                        animate={{ y: '10vh' }} 
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />
                </>
            )}

{alienAppears && (
    <motion.img
        src="src/assets/CloseAlien.png"
        alt="Alien"
        className="alien"
        initial={{ y: '-30vh', scale: 1.8, opacity: 0 }}  // Start fully transparent
        animate={{ y: '-5vh', scale: 1, opacity: 1 }}  // Smoothly increase opacity and scale
        exit={{ opacity: 0 }}  // Fade out when the animation ends
        transition={{
            duration: 3,  // Total duration for the animation
            ease: "easeInOut",
            opacity: { duration: 2 },  // Opacity fades in over 2 seconds for a smooth entrance
        }}
        onAnimationComplete={() => {
            setTimeout(() => {
                setAlienAppears(false);
            }, 1000);
        }}
    />
)}


            {showTreeTrunk && (
                <motion.img
                    src="src/assets/treetrunk.png"
                    alt="Tree Trunk"
                    className="treetrunk"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0] }} 
                    transition={{
                        duration: 3, 
                        ease: "easeInOut"
                    }}
                />
            )}
        </div>
    );
}
