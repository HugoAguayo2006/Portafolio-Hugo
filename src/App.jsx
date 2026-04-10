import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from "./components/ScrollTop.jsx";

function App() {
  return (
    <>
          <ScrollToTop />
        <Navbar/>
            <main>
            <Outlet /> {/* 👈 Aquí cambian las páginas */}
          </main>
        <Footer/>

    </>
  );
}

export default App;
