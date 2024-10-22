import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Animation from './components/Animation.jsx';
import Event from './Event.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Animation />} />
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
