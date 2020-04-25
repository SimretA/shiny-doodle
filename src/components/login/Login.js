import React, {useContext, useState} from 'react';
import {Wrapper, Second, SVG, FormContainer, InputContainer} from "./login.styled";
import {login} from "../../control/auth";
import {AuthContext} from "../../context/AuthContext";
import {useHistory, useLocation} from "react-router-dom";
import {TextInput, Button, Label} from "../shared/FormComponents";
import {LOG_IN, GET_USER_BY_ID} from "../../query/auth";
import {useLazyQuery} from "@apollo/react-hooks";
import Loading from "../shared/Loading.component";
import {emailValidation} from "../../control/validation";

export function Login(props) {

    const [formInput, setFormInput] = useState({
        email: "",
        password: ""
    });
    const [auth, setAuth] = useContext(AuthContext);
    let history = useHistory();
    let location = useLocation();
    const [getUser, {data, loading, error}] = useLazyQuery(LOG_IN);


    const [warn, setWarn] = React.useState("");
    const handleLogin = (evt) => {
        evt.preventDefault();

        if (formInput.email.trim() === "" || formInput.password.trim() === "") {
            setWarn("Please Fill All Fields");

        }
        else if(!emailValidation(formInput.email)){
            setWarn("Invalid Email");


        }
        else {

            setWarn("");
            getUser({variables: {email: formInput.email, password: formInput.password}});


        }



    };
    if (loading) {
        return <Loading/>
    }
    if (data && data.login) {
        //sessionize and keep user logged in
        console.log("token and id",data.login.token,  "id", data.login.userId);
        localStorage.setItem("token", data.login.token);
        localStorage.setItem("userId", data.login.userId);
        setAuth({
            ...auth,
            isAuthed: true,
            token: data.login.token,
            account: {id: data.login.userId, email: formInput.email}
        });
        login(history, location);
    }

    return (
        <Wrapper>
            <FormContainer>

                <Second>Login</Second>
                <p style={{color: "red"}}>{error ? error.message == "GraphQL error: user is not confirmed"
                    ? "Please use a link emailed to you to confirm your account"
                    : "Invalid email or password"
                    : warn} </p>

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




