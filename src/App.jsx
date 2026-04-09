import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';

function App() {
  return (
    <>
        <Navbar/>
            <main>
            <Outlet /> {/* 👈 Aquí cambian las páginas */}
          </main>
        <Footer/>

    </>
  );
}

export default App;
