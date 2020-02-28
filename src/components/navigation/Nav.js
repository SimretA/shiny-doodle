import  React from 'react';
import {Link} from "react-router-dom";
import "./Nav.css";

export function Nav(){



    return(
        <nav className="navbar navbar-expand-lg navigation">
            <p className="navbar-brand text-light" href="#">NAME IS BLANK</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mx-auto mt-2 mt-lg-0 float-right">
                    <li   className="nav-item mx-2">
                        <Link to={"/"}><p className="nav-link text-light">Home</p></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to={"/explore"}><p className="nav-link text-light">Explore</p></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to={"/cart"}><p className="nav-link text-light" >Cart</p></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to={"/login"}><p className="nav-link text-light" >Login</p></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to={"/signup"}><p className="nav-link text-light" >Sign up</p></Link>
                    </li>

                </ul>


            </div>
        </nav>

    );

}