import { Link } from "react-router";

const AboutMe = () =>{
    return(
        <>
            <h1>About me</h1>
            <p>
                <Link to="/"> Go back</Link>
            </p>
        </>
    );
};

export default AboutMe