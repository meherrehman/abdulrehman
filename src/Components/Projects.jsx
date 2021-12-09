import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Projects = (props) => {
    return(
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                        <video src={props.vidsrc} controls width="100%"></video>
                    </div>
                    <div className="col-lg-4 col-12 text-center">
                        <h2>Project Title</h2>
                        <p>{props.projectTitle}</p>
                        <h2>Project Description</h2>
                        <p>{props.projectDesc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;