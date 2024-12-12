import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './assets/components/headers/Navbar';
import Aboutus from './assets/components/Aboutus/Aboutus';
import Projects from './assets/components/Projects/Projects';
import Contact from './assets/components/Contact/Contact';
import Renduakshralaprema from './assets/components/ProjectDetails/Prema'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './assets/components/Footer/Footer';
import Team from './assets/components/About People/Team/Team';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Navbar stays constant */}
      <Navbar /><br></br>

      {/* Define Routes */}
      <Routes>
        {/* Home Route showing all sections */}
        <Route path="/" element={
          <>
            <Aboutus />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/aksharalaprema" element={<Renduakshralaprema />} />
        <Route path="/team" element={<Team />} />
        {/* Add additional routes here if needed */}
        {/* Example: 
        <Route path="/about" element={<Aboutus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> 
        */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
