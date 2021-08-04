import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
    
        const textRef = useRef();

        useEffect(() => {
            init(textRef.current, {
                
                backDelay: 1500,
                backSpeed: 60,
                showCursor: true,
                strings: ["Founder", "Bulla Pesa-The Joshua Generation", "Chairman-AngelsGroup Companies Which Include-Bulla Pesa,N-finet Company, Gypsum Blocks Kenya & Nutricia Foods Agency", "Codex.Inc for Software Development, Web-applications, Shopping-Carts,Payments Integration, Content-Creation", ],
            });
           
    }, []);

    return ( 
        <div className="intro" id="intro">
             <div className="left">
                    <div className="imgContainer">
                        <img src="assets/ceo.jpg" alt="" />
                    </div>             
                </div>
             <div className="right">
                 <div className="wrapper">
                     <h2>Hǐ There <span></span>I'm</h2>
                     <h1>Arthur </h1>
                     <h3>ÆCdX<span ref={textRef}></span></h3>
                 </div>
                 <a href="#portfolio">
                     <img src="assets/down.png" alt=""/>
                 </a>
             </div>
        </div>
    )
}

export default Intro
