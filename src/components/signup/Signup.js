import React, {useContext, useState} from 'react';
import {FormContainer, Column, Wrapper, InputContainer} from "./signup.styled";
import {useMutation} from '@apollo/react-hooks';
import Success from "../shared/Success.component";
import Loading from "../shared/Loading.component";
import {Fade} from "react-reveal";
import {Button, Label, TextInput} from "../shared/FormComponents";
import {Second} from "../login/login.styled";
import {ADD_USER} from "../../query/auth";

export function Signup() {



    const [addUser, addedUser] = useMutation(ADD_USER);

    const  [warn, setWarn] = useState("");


    React.useEffect(() => {
        console.log(addedUser);
    }, [addedUser]);




    const [account, setAccount] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        street: "",
        country: "",
        phone: "",
        language: "",
        ishost: false
    });
    const handleSignup = (evt) => {
        evt.preventDefault();

        if(account.email.trim()==="" || account.password.trim()==="" ||account.firstName.trim()==="" ||
            account.lastName.trim()==="" || account.phone.trim()==="" || account.country.trim()==="" ){
            setWarn("Please Fill All Required Fields");
            return;
        }

        addUser({variables: {newUser: account}})
            .catch(e=>{
                if(e.message=="GraphQL error: user already exists"){

                    setWarn("Email is already in use");
                }
            });


    };
    if (addedUser.loading) {
        return (
            <Fade left>
                <Loading/>
            </Fade>
        );
    }
    if (addedUser.data) {
        return <Success message={`Thank You! ${addedUser.data.registerUsers.firstName}
                A verification email has been sent to your email address.` }/>
    }

    return (
        <Wrapper>
            <Second>Sign up</Second>
            <h5 style={{color:"red"}}>{warn}</h5>
            <FormContainer>
                <Column>
                    <InputContainer>
                        <Label htmlFor="inputEmail1">Email</Label>
                        <TextInput type="email"  id="inputEmail1" aria-describedby="emailHelp"
                               placeholder="example@somewhere.com"
                               onChange={evt => {
                                   setAccount({...account, email: evt.target.value})
                               }}/>

                    </InputContainer>
                    <InputContainer>
                        <Label htmlFor="inputPassword1">Password</Label>
                        <TextInput type="password"  id="inputPassword1" placeholder="Password"
                               onChange={evt => {
                                   setAccount({...account, password: evt.target.value})
                               }}/>
                    </InputContainer>

                    <InputContainer >
                        <Label htmlFor="inputAddress">Street</Label>
                        <TextInput type="text" id="inputAddress" placeholder="Address"
                               onChange={evt => {
                                   setAccount({...account, street: evt.target.value})
                               }}/>
                    </InputContainer>
                    <InputContainer>
                        <Label htmlFor="inputCountry">Country</Label>
                        <TextInput type="text" id="inputCountry" placeholder="Country"
                               onChange={evt => {
                                   setAccount({...account, country: evt.target.value})
                               }}/>
                    </InputContainer>
                </Column>
                <Column>
                    <InputContainer>
                        <Label htmlFor="inputName">FirstName</Label>
                        <TextInput type="text" id="inputName" placeholder="FirstName"
                               onChange={evt => {
                                   setAccount({...account, firstName: evt.target.value})
                               }}/>
                    </InputContainer>
                    <InputContainer>
                        <Label htmlFor="inputName">LastName</Label>
                        <TextInput type="text"  id="inputName" placeholder="LastName"
                               onChange={evt => {
                                   setAccount({...account, lastName: evt.target.value})
                               }}/>
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="inputPhoneNumber">Phone Number</Label>
                        <TextInput type="telephone"  id="inputPhoneNumber"
                               placeholder="Phone Number"
                               onChange={evt => {
                                   setAccount({...account, phone: evt.target.value})
                               }}/>
                    </InputContainer>


                    <Button type="submit"
                            onClick={evt => handleSignup(evt)}>Sign up
                    </Button>
                </Column>


            </FormContainer>
        </Wrapper>
    );
}

