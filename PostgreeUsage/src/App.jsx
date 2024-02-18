import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog'; // Optional
import './App.css'

const App = () => {
  return (
    <div className="app">
        <Router>
          <Navbar className="nav"/>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/contact" element={<Contacts />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} /> {/* Optional */}
            </Routes>
          </main>
        </Router>
    </div>
  );
};

export default App;
