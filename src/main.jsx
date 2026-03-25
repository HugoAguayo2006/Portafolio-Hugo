import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Pro from './pages/Projects.jsx';
import Conta from './pages/ContactMe.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Pro />} />
        <Route path="/contact-me" element={<Conta />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);