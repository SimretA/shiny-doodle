import React, {useContext, useState} from 'react';
import {Wrapper, Second, SVG, FormContainer, InputContainer} from "./login.styled";
import {login} from "../../control/auth";
import {AuthContext} from "../../context/AuthContext";
import {useHistory, useLocation} from "react-router-dom";
import {TextInput, Button, Label} from "../shared/FormComponents";
import {LOG_IN, GET_USER_BY_ID} from "../../query/auth";
import {useLazyQuery} from "@apollo/react-hooks";
import Loading from "../shared/Loading.component";

export function Login(props) {

    const [formInput, setFormInput] = useState({
        email: "",
        password: ""
    });
    const [auth, setAuth] = useContext(AuthContext);
    let history = useHistory();
    let location = useLocation();
    const [getUser, {data, loading}] = useLazyQuery(LOG_IN);


    const handleLogin = (evt) => {
        evt.preventDefault();


        getUser({variables: {email: formInput.email, password: formInput.password}});

        //Login query goes here


    };
    if (loading) {
        return <Loading/>
    }
    if (data && data.login) {
        console.log(data.login);
        setAuth({...auth, isAuthed: true, token: data.login.token, account: { id: data.login.userId, email: formInput.email}});
        login(history, location);
    }


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
                               placeholder="Enter email"
                               onChange={(evt) => setFormInput({...formInput, email: evt.target.value})}/>

                </InputContainer>
                <InputContainer>
                    <Label htmlFor="exampleTextInputPassword1">Password</Label>
                    <TextInput required type="password" id="exampleTextInputPassword1"
                               placeholder="Password"
                               onChange={(evt) => setFormInput({...formInput, password: evt.target.value})}/>

                </InputContainer>
                <Button type="submit" onClick={evt => handleLogin(evt)}>Login</Button>

            </FormContainer>
        </Wrapper>
    );
}

