import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import "./Nav.css";
import {AuthContext} from "../../context/AuthContext";
import {logout} from "../../control/auth";

export function Nav(props) {

    const [auth, setAuth] = useContext(AuthContext);


    return (
        <nav className="navbar bg-warning navbar-expand-lg navigation"
             style={{backgroundColor: window.scrollY > 1 ? "white" : "transparent"}}>
            <p className="navbar-brand text-light font-weight-bold" href="#">NAME GOES HERE</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mx-auto mt-2 mt-lg-0 float-right">
                    <li className="nav-item mx-2">
                        <Link to={"/"}><p className="nav-link text-light font-weight-bold">Home</p></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to={"/explore"}><p className="nav-link text-light font-weight-bold">Explore</p></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to={"/add-listing"}><p className="nav-link text-light font-weight-bold">Add Listing</p>
                        </Link>
                    </li>
                    {auth.isAuthed ? <>
                        <li className={"nav-item mx-2"}>
                            <Link to={"/profile"}><p className={"nav-link text-light font-weight-bold"}>{
                                `Hello ${auth.account.firstName}`
                            }</p></Link>
                        </li>
                        <li className={"nav-item mx-2"}>
                            <div onClick={() => {
                                setAuth({...auth, isAuthed: false});
                                logout(props.history)
                            }
                            }><p className={"nav-link text-light font-weight-bold"}>
                                Logout
                            </p></div>
                        </li>
                    </> : <>
                        <li className="nav-item mx-2">
                            <Link to={"/login"}><p className="nav-link text-light font-weight-bold">Login</p></Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to={"/signup"}><p className="nav-link text-light font-weight-bold">Sign up</p></Link>
                        </li>
                    </>}


                </ul>


            </div>
        </nav>

    );

}
