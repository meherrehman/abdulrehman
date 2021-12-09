import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import "../index.css";
import Projects from "./Projects";
import project1 from "../Videos/vid1.mp4";

const ProjectPage = () => {
    return(
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col text-center my-3">
                        <h2 className="display-2 projectpage-header">My Projects</h2>
                    </div>
                </div>
                <ol>
                    <li className="mb-2">
                    <Projects vidsrc={project1} projectTitle="Portfolio Project" projectDesc="Null"/>
                    </li>
                    <li className="mb-2">
                    <Projects vidsrc={project1} projectTitle="Portfolio Project" projectDesc="Null"/>
                    </li>   
                </ol>
            </div>
        </>
    )
}

export default ProjectPage;