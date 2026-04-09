import { Link } from "react-router";
import Hero from "../components/Hero";
import "./Home.css";
const Home = () => {
    return(
        <>
        <div className="home">
            <h1>Home</h1>
            <p>
                <Link to="/"> Go back</Link>
            </p>
            
        </div>


            <Hero/>

        </>
    );
};

export default Home;