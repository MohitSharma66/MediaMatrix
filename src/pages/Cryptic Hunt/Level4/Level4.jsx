import React from 'react'
import DrawerAppBar from '../../../components/Navbar/Navbar'
import "./Level4.css"
import Level4Audio from "../../../assets/Audio/Level4.mp3"
import Level4Code from "../../../assets/Untitled 1.png"
// import Level4Code from ""

const Level4 = () => {
  const [answer, setAnswer] = React.useState("");
  const [display, setDisplay] = React.useState(false);
  const correctAnswer = "TUROCHAMP"; // Replace with the actual correct answer

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
        <DrawerAppBar/>
        <div className="level4-img">
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
        <audio controls>
          <source src={Level4Audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {/* Download link for the audio file */}
        <a href={Level4Audio} download="Level4Audio.wav" className="download-link" style={{color:"white", border:"2px solid white", padding:"5px", borderRadius:"8px", background:"black"}}>
          Download Audio
        </a>
        <div className="h1" style={{color:"black"}}>LEVEL 4:</div>
        <div className="h1" style={{color:"black"}}>CHESS AND MUSIC</div>
        {display && 
        <img src={Level4Code} height="200px" width="200px"/>
        }
        </div>
    </div>
  )
}

export default Level4