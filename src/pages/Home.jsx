import { Link } from "react-router";
import Hero from "../components/Hero";
const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <p>
                <Link to="/"> Go back</Link>
            </p>
            
            <Hero/>

        </>
    );
};

export default Home;