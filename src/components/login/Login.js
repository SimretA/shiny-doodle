import React, {useContext} from 'react';
import {Wrapper, Second, Button, SVG, FormContainer} from "./login.styled";
import{login} from "../../control/auth";
import {AuthContext} from "../../context/AuthContext";
import {useHistory, useLocation} from "react-router-dom";

export function Login(props) {

    const [auth, setAuth] = useContext(AuthContext);
    let history = useHistory();
    let location = useLocation();

    const handleLogin = (evt) => {
        evt.preventDefault();
        //Login query goes here
        setAuth({...auth, isAuthed: true});
        login(history, location);

    };
    return (
        <Wrapper className={"mx-auto my-5"}>
            <SVG viewBox={"0 0 500 500"} preserveAspectRatio={"none"}>
                <path
                    d="M 0 50 L 500 500 L 0 500 z"
                    fill="#FFF70022"/>
            </SVG>
            <FormContainer>

                <form>
                    <Second>Login</Second>
                    <div className="form-group row py-2 mx-auto">
                        <label htmlFor="exampleInputEmail1" className={"col-sm-2 col-form-label "}>Email</label>
                        <input type="email" className="form-control col-sm-8" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"/>

                    </div>
                    <div className="form-group row py-3 mx-auto">
                        <label htmlFor="exampleInputPassword1" className={"col-sm-2 col-form-label"}>Password</label>
                        <input type="password" className="form-control col-sm-8" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>
                    <Button className={"px-4 py-1 btn"} type="submit" onClick={evt => handleLogin(evt)}>Login</Button>
                </form>
            </FormContainer>
        </Wrapper>
    );
}

