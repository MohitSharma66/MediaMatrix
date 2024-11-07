import React from 'react'
import "../../Cryptic Hunt/Cryptic/Cryptic.css"
import DrawerAppBar from '../../../components/Navbar/Navbar'
import level1code from "../../../assets/Level1.png"
import "./Level1.css"

const Level1 = () => {
  return (
    <div className='cryptic container-cryptic' style={{background:"red"}}>
        <DrawerAppBar/>
        <div className="code">
            <div className="overlay" style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
               <div className="h1">SOLVE TO PROCEED TO LEVEL 2</div>
            </div>
            <img src={level1code} height="100%" width="100%" />
        </div>
        <div className="h1">VOID</div>
        <div className="h1">LEVEL 1:</div>
    </div>
  )
}

export default Level1