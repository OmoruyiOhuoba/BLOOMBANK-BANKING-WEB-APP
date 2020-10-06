import React from "react";
import BloomImg from "../assets/BloomImg.png";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <div className="second">
            <img className="secondBloomImg"src={BloomImg} alt="Bloom Bank Logo"/>
           
            <p className="text-second"><b>Register </b>an account with us today to save your money and your future here at the world's number 1 bank!</p>
            <p className="text-third">Create an account by clicking sign up or login to your account below</p>
            <br/>
        
            <Link to="/register" className="button-link"><button>Sign Up</button></Link> <br/> <br/><Link to="/login" className="button-link"> <button> Log in</button></Link>
            </div>
        </div>
    )
}

export default Home