import React from "react"
import "./header.css"
import headerImg from "../images/headerImg.jpg";
import SEB from "../images/SEB.png";
import Lastminute from "../images/Lastminute.png";
import Compensa from "../images/Compensa.png";
import Swedbank from "../images/Swedbank.png";
import smeBank from "../images/smeBank.png";
import MomentCredit from "../images/MomentCredit.png";
import LogoWish from "../images/LogoWish.png";
import inbank from "../images/inbank.png";
import Grid from "../../pages/grid/Grid.jsx";


export default function Header() {
    return (
        <>
            <div className="headerContainer">
            <div className="headerText">
                <h1>Our goal is to safeguard your finances against fraud of all kinds</h1>
                <p className="headerP">We are dedicated to protecting your funds and investments from prying hands with our exclusive wide range of available services at your disposal. 
                <br />
                Your happiness and satisfaction is important to us</p>
               
                <div className="button">
                    <button className="freeTrial">Start your free trial</button>
                    <button className="demo">Request a demo</button>
                </div>
            </div>
            <div>
                <img src={headerImg} alt="Header" />
            </div>
        </div>
        <div className="business">
            <p className="businessP">Used by 20,000+ businesses from small startups to household names</p>
            <div className="businessContainer">
                <img className="businessNames" src={SEB} alt=""/>
                <img className="businessNames" src={Lastminute} alt=""/>
                <img className="businessNames" src={Compensa} alt=""/>
                <img className="businessNames" src={Swedbank} alt=""/>
                <img className="businessNames" src={smeBank} alt=""/>
                <img className="businessNames" src={MomentCredit} alt=""/>
                <img className="businessNames" src={LogoWish} alt=""/>
                <img className="businessNames" src={inbank} alt=""/>
            </div>
        </div>
        <div className="nextPage">
            <h2>Real-World Fraud Protection Designed With Your Customers in Mind</h2>
            <p className="nextPageP">Binva is a pioneering KYC compliance platform that incorporates all the necessary Know-Your-Customer (KYC) and Anti-Money Laundering (AML) tools and digital identity services for safe client identity verification, AML screening, and lifecycle management.</p>
            <div>
                <Grid />
            </div>
        </div>
        
        </>
        
    );
}