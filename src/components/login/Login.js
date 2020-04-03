import React, {useContext} from 'react';
import {Wrapper, Second, SVG, FormContainer, InputContainer} from "./login.styled";
import {login} from "../../control/auth";
import {AuthContext} from "../../context/AuthContext";
import {useHistory, useLocation} from "react-router-dom";
import {TextInput, Button, Label} from "../shared/FormComponents";

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
        <Wrapper>
            {/*<SVG viewBox={"0 0 500 500"} preserveAspectRatio={"none"}>*/}
                {/*<path*/}
                    {/*d="M 0 50 L 500 500 L 0 500 z"*/}
                    {/*fill="#FFF70022"/>*/}
            {/*</SVG>*/}
            <FormContainer>

                <Second>Login</Second>
                <InputContainer>
                    <Label htmlFor="email">Email</Label>
                    <TextInput required type="email" id="email"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"/>

                </InputContainer>
                <InputContainer>
                    <Label htmlFor="exampleTextInputPassword1">Password</Label>
                    <TextInput required type="password" id="exampleTextInputPassword1"
                               placeholder="Password"/>
                </InputContainer>
                <Button type="submit" onClick={evt => handleLogin(evt)}>Login</Button>

            </FormContainer>
        </Wrapper>
    );
}

