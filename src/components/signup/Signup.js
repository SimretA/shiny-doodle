import React, {useState} from 'react';
import {FormContainer, Column, Wrapper, InputContainer} from "./signup.styled";


import {useMutation} from '@apollo/react-hooks';
import {gql} from "apollo-boost";
import Success from "../shared/Success.component";
import Loading from "../shared/Loading.component";
import {Fade} from "react-reveal";
import {Button, Label, TextInput} from "../shared/FormComponents";
import {Second} from "../login/login.styled";


export function Signup() {

    const ADD_USER = gql`
  mutation registerUsers($newUser: NewUserInput!) {
    registerUsers(
        input: $newUser
        ){
            id
            firstName
            lastName
            email
            country
        }
    
  }
`;

    const [addUser, addedUser] = useMutation(ADD_USER);


    React.useEffect(() => {
        console.log(addedUser);
    }, [addedUser]);

    //TODO add language and is host

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

        addUser({variables: {newUser: account}});


    };
    if (addedUser.loading) {
        return (
            <Fade left>
                <Loading/>
            </Fade>
        );
    }
    if (addedUser.data) {
        return <Success message={`Welcome ${addedUser.data.registerUsers.firstName}`}/>
    }

    return (
        <Wrapper>
            <Second>Sign up</Second>
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

                    {//TODO add language and is host
                    }
                    <Button type="submit"
                            onClick={evt => handleSignup(evt)}>Sign up
                    </Button>
                </Column>


            </FormContainer>
        </Wrapper>
    );
}

