import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import LoginForm from './LoginForm';
import Home from './Home';
import Services from './services';
import About from './about';
import Contact from './contact';

function App() {
  return (
    <Router>
      <div>
        <HeaderBar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

