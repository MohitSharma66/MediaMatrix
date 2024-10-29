import React from 'react'
import "./ContactUs.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "react-router-dom"
const ContactUs = () => {
  return (
    <div className='contact-cont' id="contact">
        <div className="ecell-section contact-section">
            <h1 style={{marginBottom: "4%", fontWeight:"600", color:"red"}}>Media Matrix</h1>
            <p style={{color: "white",}}>The most import thing in communication is to hear what isn't beign said. So come connect with us and share your reviews and ideas.</p>
            <div className="socials">
                <br></br>
                {/* <FacebookRoundedIcon sx={{color: "aqua", fontSize:"1.8rem"}}/>
                &nbsp; */}
                <a href="https://x.com/ecell_iiitnr?lang=en"><XIcon sx={{color: "white", fontSize:"1.8rem"}}/></a>
                &nbsp;
                <a href="https://www.instagram.com/ecell_iiitnr/"><InstagramIcon sx={{color: "white", fontSize:"1.8rem"}}/></a>
                &nbsp;
               <a href="https://www.linkedin.com/company/e-cell-iiit-nr/mycompany/"><LinkedInIcon sx={{color: "white", fontSize:"1.8rem"}}/></a>
            </div>
        </div>
        <div className="quick-section contact-section">
            <h1 style={{marginBottom: "4%", fontWeight:"600", color:"red"}}>Quick Links</h1>
            <div className="links">
                <div className="link">
                <ArrowForwardIcon sx={{color: "white", fontSize:"1.5rem"}}/>
                &nbsp;
                <a href="/">Home</a>
                </div>
                <div className="link">
                <ArrowForwardIcon sx={{color: "white", fontSize:"1.5rem"}}/>
                &nbsp;
                <a href="#about">About</a>
                </div>
                <div className="link">
                <ArrowForwardIcon sx={{color: "white", fontSize:"1.5rem"}}/>
                &nbsp;
                <a href="/event">Events</a>
                </div>
                {/* <div className="link">
                <ArrowForwardIcon sx={{color: "aqua", fontSize:"1.5rem"}}/>
                &nbsp;
                <Link to="/team">Team</Link>
                </div> */}
                {/* <div className="link">
                <ArrowForwardIcon sx={{color: "aqua", fontSize:"1.5rem"}}/>
                &nbsp;
                <a href="#gallery">Gallery</a>
                </div> */}
            </div>
        </div>
        <div className="contact-section contact-section">
            <h1 style={{marginBottom: "3%", color:"red"}}>Contact Info</h1>
            <div className="contacts">
                <a target="_main" href="https://www.google.com/maps/dir/Plot+No.+7,+International+Institute+of+Information+Technology,+Naya+Raipur,+Purkhoti+Muktangan,+Sector+24,+Atal+Nagar-Nava+Raipur,+Chhattisgarh/Plot+No.+7,+near+Purkhoti+Muktangan,+Sector+24,+Atal+Nagar-Nava+Raipur,+Uparwara,+Chhattisgarh+493661/@21.1284594,81.72488,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3a28c434ac2ae871:0x4e3568497a7e1d7e!2m2!1d81.7661654!2d21.1284644!1m5!1m1!1s0x3a28c434ac2ae871:0x4e3568497a7e1d7e!2m2!1d81.7661654!2d21.1284644?entry=ttu"><div className="contact-info"><LocationOnIcon sx={{color: "white"}}/>&nbsp;&nbsp;IIIT Naya Raipur, Chattisgarh</div></a>
                {/* <div className="contact-info"><LocalPhoneIcon sx={{color: "aqua"}}/>&nbsp;&nbsp;+91 79876 65370</div> */}
                <a href="mailto:"><div className="contact-info"><MailIcon sx={{color: "white", cursor:"pointer"}}/>&nbsp;&nbsp;</div></a>
            </div>
        </div>
    </div>
  )
}

export default ContactUs