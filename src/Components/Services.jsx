import React, { useEffect } from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import sideimg from "../Images/serviceimg1.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {

    useEffect(()=>{
        Aos.init({duration : 1000})
    }, [])

    return(
        <>
            <div className="container service-area">
                <div className="row">
                    <div className="col-12 display-2 text-center mt-3">
                        <div className="service-header text-white">My Services</div> 
                    </div>
                </div>
                <div className="row p-4 justify-content-between flex-lg-row flex-column">
                    <div className="col-lg-5 col-12 text-center">
                        <img className="service-img" src={sideimg} alt="sideimg" />
                    </div>
                    <div className="col-lg-5 col-12" data-aos="fade-right">
                        <div className="service-poster p-3 mb-3" id="service-1">
                            <h3>Web Development Skills</h3>
                            <p>Html 5 , Css 3 , Javascript , Jquery , Bootstrap 5 , React Js , Next Js , Node Js , Express Js , MongoDb , Moongoose</p>
                        </div>
                        <div className="service-poster p-3 mb-3" id="service-1" data-aos="fade-right">
                            <h3>UI / UX Skills</h3>
                            <p>Figma , Adobe XD , Sketch</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Services;