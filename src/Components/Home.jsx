import React from "react";
import MainArea from "./MainArea";
import Navbar from "./Navbar";
import Services from "./Services";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Projects";
import "../index.css";
import project1 from "../Videos/vid1.mp4";
import About from "./About";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <>
            <Navbar />
            <MainArea />
            <Services />
            <div className="container project-area">
                <div className="row">
                    <div className="col-12 text-center display-2 my-3">
                        <div className="project-header">My Projects</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Projects vidsrc={project1} projectTitle="Portfolio Project" projectDesc="Null"/>
                    </div>
                    <NavLink to="/ProjectPage">
                    <button className="btn btn-primary col-12">See more projects</button>
                    </NavLink>
                </div>
            </div>
            <About />
            <Footer />
        </>
    )
}

export default Home;