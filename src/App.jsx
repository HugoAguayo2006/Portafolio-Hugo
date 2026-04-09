import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

function App() {
  return (
    <>
        <Navbar/>
            <main>
            <Outlet /> {/* 👈 Aquí cambian las páginas */}
          </main>

    </>
  );
}

export default App;
