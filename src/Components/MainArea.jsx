import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import myImg from "../Images/myImage.jpg";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import "../index.css"

const MainArea = () => {
    return(
        <>
            <div className="container main-area">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={myImg} alt="myImage" className="main-area-img mt-5"/>
                    </div>
                </div>
                <div className="main-area-poster" id="poster-1">
                    <h3 className="main-area-poster-centent">Hi ! <TagFacesIcon /><br />I am Abdul Rehman</h3>
                </div>
                <div className="main-area-poster" id="poster-2">
                    <h3 className="main-area-poster-centent">UI / UX Designer</h3>
                </div>
                <div className="main-area-poster" id="poster-3">
                    <h3 className="main-area-poster-centent">Web Developer</h3>
                </div>
            </div>
        </>
    )
};

export default MainArea;