import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Pro from './pages/Projects.jsx';
import Conta from './pages/ContactMe.jsx';
import Experience from './pages/Experience.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* 👇 Layout principal */}
        <Route path="/" element={<App />}>

          {/* 👇 Estas páginas usan el Outlet */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Pro />} />
          <Route path="contact-me" element={<Conta />} />

        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);