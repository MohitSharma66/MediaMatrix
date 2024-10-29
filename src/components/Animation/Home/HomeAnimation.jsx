import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BigTrees from "../../../assets/Animation/Animation/BigTrees.png"
import CloseAlien from "../../../assets/Animation/Animation/CloseAlien.png"
import Cycle from "../../../assets/Animation/Animation/Cycle.png"
import right from "../../../assets/Animation/Animation/right.png"
import left from "../../../assets/Animation/Animation/left.png"
import kids from "../../../assets/Animation/Animation/kids.png"
import path from "../../../assets/Animation/Animation/path.png"
import TreeTrunk from "../../../assets/Animation/Animation/TreeTrunk.png"
import './HomeAnimation.css';

export default function HomeAnimation({ blackBackground, setBlackBackground, onAnimationComplete }) {
    const [showTreeTrunk, setShowTreeTrunk] = useState(false);
    const [showEverything, setShowEverything] = useState(false); 
    const [showKids, setShowKids] = useState(false); 
    const [treesExit, setTreesExit] = useState(false); 
    const [showTrees, setShowTrees] = useState(true); 
    const [kidsReturn, setKidsReturn] = useState(false); 
    const [alienAppears, setAlienAppears] = useState(false); 

    const startAnimation = () => {
        // Reset all states
        setShowTreeTrunk(false);
        setShowEverything(false);
        setShowKids(false);
        setTreesExit(false);
        setShowTrees(true);
        setKidsReturn(false);
        setAlienAppears(false);
        
        // Start the animation sequence
        setTimeout(() => {
            setShowKids(true); 
        }, 1500); 
        
        setTimeout(() => {
            setTreesExit(true);
            setKidsReturn(true);
        }, 3500); 
        
        setTimeout(() => {
            setShowTrees(false); 
            setShowEverything(true); 
        }, 4500); 
        
        setTimeout(() => {
            setAlienAppears(true); 
        }, 7000); 
        
        setTimeout(() => {
            setKidsReturn(false); 
            setAlienAppears(false); 
            setShowEverything(false); 
            setBlackBackground(true); // Set black background here
        }, 10000); 
        
        setTimeout(() => {
            setShowTreeTrunk(true); 
            onAnimationComplete(); 
        }, 11000);
        
        // setTimeout(() => {
        //     setShowTreeTrunk(false); 
        //     onAnimationComplete(); 
        // }, 14000);
    };

    useEffect(() => {
        startAnimation(); // Start the animation on mount
    }, [setBlackBackground]);

    return (
        <div className={`animation-container ${blackBackground ? 'black-background' : ''}`}>
            {showTrees && (
                <>
                    <motion.img
                        src= {BigTrees}
                        alt="Big Trees"
                        className="big-trees"
                        initial={{ scale: 2 }} 
                        animate={{ scale: treesExit ? 3 : 1 }} 
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.img
                        src={left}
                        alt="Left Tree"
                        className="left-tree"
                        initial={{ x: '-100vw' }} 
                        animate={{ x: treesExit ? '-100vw' : '0vw' }} 
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                    <motion.img
                        src={right}
                        alt="Right Tree"
                        className="right-tree"
                        initial={{ x: '100vw' }} 
                        animate={{ x: treesExit ? '100vw' : '0vw' }} 
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                </>
            )}

            {showKids && (
                <motion.img
                    src={Cycle}
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
                        src={kids}
                        alt="Kids"
                        className="kids"
                        initial={{ y: '100vh' }} 
                        animate ={{ y: ['100vh', '0vh'] }} 
                        transition={{
                            duration: 3, 
                            ease: "easeInOut",
                            times: [0, 0.5, 2.5],
                        }}
                    />
                    <motion.img 
                        src={path}
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
                    src={CloseAlien}
                    alt="Alien"
                    className="alien"
                    initial={{ y: '-30vh', scale: 1.8, opacity: 0 }}  
                    animate={{ y: '-5vh', scale: 1 , opacity: 1 }}  
                    exit={{ opacity: 0 }}  
                    transition={{
                        duration: 3,  
                        ease: "easeInOut",
                        opacity: { duration: 2 },  
                    }}
                    onAnimationComplete={() => {
                        setTimeout(() => {
                            setAlienAppears(false);
                        }, 1000);
                    }}
                />
            )}

            {/* {showTreeTrunk && (
                <motion.img
                    src={TreeTrunk}
                    alt="Tree Trunk"
                    className="treetrunk"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0] }} 
                    transition={{
                        duration: 3, 
                        ease: "easeInOut"
                    }}
                />
            )} */}
        </div>
    );
}
