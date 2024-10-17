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
        }, 3500); 
    
        const hideElementsTimeout = setTimeout(() => {
            setShowTrees(false); 
            setShowEverything(true);
            setKidsReturn(true); 
        }, 4500); 
    
        const alienAppearTimeout = setTimeout(() => {
            setAlienAppears(true); 
        }, 7800); 
    
        const blackBackgroundTimeout = setTimeout(() => {
            setKidsReturn(false); 
            setAlienAppears(false); 
            setShowEverything(false); 
            setBlackBackground(true);  
        }, 11000); 
    
        const treeTrunkTimeout = setTimeout(() => {
            setShowTreeTrunk(true); 
        }, 11500);
    
        const resetTimeout = setTimeout(() => {
            setShowTreeTrunk(false); 
            setBlackBackground(false); 
        }, 14500); 
    
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
                        initial={{ y: '200vh' }} 
                        animate={{ y: treesExit ? '-200vh' : '0vh' }} 
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="src/assets/Left.png"
                        alt="Left Tree"
                        className="left-tree"
                        initial={{ y: '200vh' }} 
                        animate={{ y: treesExit ? '-200vh' : '48vh' }} 
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                    <motion.img
                        src="src/assets/Right.png"
                        alt="Right Tree"
                        className="right-tree"
                        initial={{ y: '200vh' }} 
                        animate={{ y: treesExit ? '-200vh' : '3vh' }} 
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                </>
            )}

            {showKids && (
                <motion.img
                    src="src/assets/kids.png"
                    alt="Kids"
                    className="kids"
                    initial={{ x: '-100vw' }} 
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
                        initial={{ x: '-100vw' }} 
                        animate={{ x: ['-100vw', '0vw'] }} 
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
                    initial={{ y: '-30vh', scale: 1.8, opacity: 0.5 }} 
                    animate={{ y: '-5vh', scale: 1, opacity: 1 }} 
                    transition={{
                        duration: 3,       
                        ease: "easeInOut",
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
