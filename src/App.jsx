import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Music from './components/Music/Music';
import ScrollToTop from "react-scroll-to-top";
import zIndex from '@mui/material/styles/zIndex';
import Event from './pages/Events/Event';
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  const d="M24.37 0.1521V3.49566C24.4796 3.49566 24.6714 3.52306 24.8085 3.6875L44.5957 25.3384C44.6505 25.4206 44.8698 25.6399 44.7054 25.9961C44.5409 26.3524 44.2669 26.3524 44.1572 26.3524C41.0055 26.3524 38.2375 28.3531 37.2235 31.3404L24.9181 67.8454C24.8907 67.955 24.781 68.2565 24.3426 68.2565C23.9041 68.2565 23.8218 67.9824 23.767 67.8454L11.4616 31.3404C10.4476 28.3531 7.67958 26.3524 4.52787 26.3524C1.37616 26.3524 4.14418 26.3524 3.97975 25.9961C3.81531 25.6399 4.00715 25.4206 4.08937 25.3384L23.8766 3.6875C24.0137 3.52306 24.2055 3.49566 24.3151 3.49566V0.1521M24.3151 0.1521C23.2463 0.1521 22.1775 0.590602 21.3827 1.44019L1.59541 23.0911C-0.734119 25.6399 1.07469 29.7234 4.52787 29.7234C7.98105 29.7234 7.7344 30.8196 8.28252 32.4092L20.5879 68.9142C21.1908 70.6956 22.753 71.6001 24.3426 71.6001C25.9321 71.6001 27.4943 70.6956 28.0972 68.9142L40.4026 32.4092C40.9507 30.7922 42.458 29.7234 44.1572 29.7234C47.583 29.7234 49.3918 25.6399 47.0897 23.0911L27.3024 1.44019C26.5076 0.590602 25.4388 0.1521 24.37 0.1521H24.3151Z"
  const scrollStyle={
    border:"2px solid red",
    height:"55px",
    width:"50px",
    zIndex:"100000",
    bottom:"5px",
    right:"5px",
    backgroundColor:"black"
   }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    <Music/>
    <ScrollToTop className="scroll-top" smooth={true} color="red" viewBox="0 0 49 72" svgPath={d} style={scrollStyle}/>
     </>
  );
}

export default App;
