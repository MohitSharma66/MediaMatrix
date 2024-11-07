import React from 'react';
import "../../Cryptic Hunt/Cryptic/Cryptic.css";
import DrawerAppBar from '../../../components/Navbar/Navbar';
import Level3Code from "../../../assets/Level3.png";
import "./Level3.css";

const Level3 = () => {
    const [answer, setAnswer] = React.useState("");
    const [display, setDisplay] = React.useState(false);
    const correctAnswer = "Kate Bush"; // Replace with the actual correct answer

    function onSubmitHandler(event) {
        event.preventDefault();  // Prevent page reload
        
        // Check if the answer is correct
        if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            setDisplay(true);
        } else {
            alert("Incorrect answer. Please try again."); // Optional: alert for incorrect answers
        }

        setAnswer(""); // Clear the input field after submission
    }

    function changeHandler(event) {
        const { value } = event.target;
        setAnswer(value);  // Set the answer directly
    }

    React.useEffect(() => {
        console.log(answer);
    }, [answer]);  // Log whenever the answer changes

    return (
        <div className='cryptic container-cryptic'>
            <DrawerAppBar />
            {!display && <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    name="answer"
                    value={answer}
                    onChange={changeHandler}
                    placeholder="Enter your answer"
                    autoComplete='off'
                    style={{height:"40px", outline:"0", border:"0", margin:"2px", borderRadius:'8px', paddingLeft:"10px"}}
                />
                <button type="submit" style={{color:"white", background:"black", padding:"5px", borderRadius:"8px", border:"2px solid white", margin:"2px", height:"40px"}}>Submit</button>
            </form>}
{display && 
<>         
<span  style={{display:"none"}}>A: Apple B: Ball C: Cat D: Dog</span> <span style={{display:"none"}}>E: Eleven</span> <span style={{display:"none"}}>F: Fun G: Gun H: Hat I: India J: Jocker</span>  <span style={{display:"none"}}>K: Kate</span> <span style={{display:"none"}}>L: Lion M: Mango N: Nut O: Orange p: Pasta Q: Queen R: Rat  S: Station T: Tiger U: Umbrella V: Van W: Water X: Xylophone Y: Yo Yo Z: Zebra</span> </> }
            <div className="l3">WHO MADE THE DEAL WITH GOD?</div>
            <div className="h1">LEVEL 3:</div>
            {display && (
                <div className="code-container" style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                    <img src={Level3Code} alt="Level 3 Code" />
                    <a href="https://www.youtube.com/watch?v=bV0RAcuG2Ao" target="_blank" rel="noopener noreferrer">LINK</a>
                    <div className="l3">PATH: YRyjGCIXFvI1o31 + Answer</div>
                    1K 2K 3K 4K 5K 6K 7K 8K 9K 10K 11K 12K 13K 14K 15K 16K 17K 18K 19K 20K
                </div>
            )}
        </div>
    );
};

export default Level3;
