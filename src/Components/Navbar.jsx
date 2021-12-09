import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Navbar = () =>{
    return(
        <>
            <div className="container navbar-container">
                <div className="row align-items-center navbar_bg">
                    <div className="col-2">
                        <div className="display-1 navbar-header">Hola</div>
                    </div>
                    <div className="col-10 text-end">
                        <NavLink to="/" className="nav_items">Home</NavLink>
                        <NavLink to="/ProjectPage" className="nav_items">Projects</NavLink>
                        <NavLink to="/Contact" className="nav_items">Contact</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;