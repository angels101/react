import React from "react";
import Typed1 from "react-typing-effect";
import Typed from 'react-typed';
const Header = () => {
    return (
    <div className="header-wraper">
        <div className="main-info">
            <br></br>
            <h1>AngelsCodex.Inc Software development & Websites Promotions</h1>
            <Typed 
            className="typed-text"
            strings={["software design", "web development", "blockchain-shopping-carts","Facebook Ads SMM", "AngelsCodex.Inc"]}
            typeSpeed={40}
            backSpeed={60}
            />
            <a  href="#" className="btn-main-offer">Contact me</a>
        </div> 
    </div>
    )
}

export default Header
