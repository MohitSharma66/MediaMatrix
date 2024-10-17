import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
