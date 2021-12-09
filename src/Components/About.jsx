import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () =>{

    useEffect(()=>{
        Aos.init({duration : 1000});
    },[])

    return(
        <>
            <div className="container about-area">
                <div className="row">
                    <div className="col-12 display-2 mt-3">
                        <div className="about-header text-center text-white">About Me</div>
                    </div>
                </div>
                <div className="row justify-content-around my-1" data-aos="slide-right">
                <div className="about-poster col-lg-4 col-8 mx-2" id="about-1">
                    <h3 className="about-poster-header" id="about-poster-header-1">Education</h3>
                    <p className="text-white">I am a student of <strong className="text-black">BSIT</strong> at National Textile University, Faisalabad</p>
                </div>
                <div className="about-poster col-lg-4 col-8 mx-2 my-1" id="about-2" data-aos="slide-left">
                    <h3 className="about-poster-header" id="about-poster-header-2">Illustration</h3>
                    <p className="text-white">Freelancer Since 2020 on different plateforms like <strong className="text-black">Fiverr and Upwork</strong></p>
                </div>
                </div>
                <div className="row">
                    <div className="about-poster col-lg-4 col-8 mx-auto" id="about-3" data-aos="fade-left">
                    <h3 className="about-poster-header" id="about-poster-header-3">Music & Games</h3>
                    <p className="text-white">I also enjoy Listning <strong className="text-black">Music</strong> and playing <strong className="text-black">Video Games</strong> as a hobby</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;