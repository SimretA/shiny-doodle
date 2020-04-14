import React, {useContext} from 'react';
import {AppName, NavLink, NavWrapper} from "./nav.styled";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {logout} from "../../control/auth";

export default function AppNav(props) {
    const [auth, setAuth] = useContext(AuthContext);


    return (<NavWrapper>
            <AppName>Addis B'n'B</AppName>
            <Link style={{textDecoration: "none"}} to={"/"}><NavLink>Home</NavLink></Link>
            <Link style={{textDecoration: "none"}} to={"/explore"}><NavLink>Explore</NavLink></Link>
            <Link style={{textDecoration: "none"}} to={"/add-listing"}><NavLink>Add Listing</NavLink></Link>
            {auth.isAuthed ? <>
                    <Link style={{textDecoration: "none"}} to={"/profile"}><NavLink>
                        My Account
                    </NavLink>
                    </Link><Link style={{textDecoration: "none"}} to={"/bookings"}><NavLink>
                        My Bookings
                    </NavLink></Link>

                    <NavLink onClick={() => {
                        setAuth({...auth, isAuthed: false});
                        localStorage.removeItem("token");
                        localStorage.removeItem("userId");
                        logout(props.history)
                    }
                    }>
                        Logout
                    </NavLink>
                </> :
                <>
                    <Link style={{textDecoration: "none"}}
                          to={"/login"}><NavLink>Login</NavLink></Link>
                    <Link style={{textDecoration: "none"}} to={"/signup"}><NavLink>Sign Up</NavLink></Link></>}

        </NavWrapper>

    );
}
