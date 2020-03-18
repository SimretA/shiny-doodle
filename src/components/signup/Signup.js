import React, {useState} from 'react';
import {Second, Button, SVG, FormContainer} from "../login/login.styled";
import {Wrapper, Form} from "./signup.styled";


import {useMutation} from '@apollo/react-hooks';
import {gql} from "apollo-boost";
import Success from "../shared/Success.component";


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


    const [account, setAccount] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        street: "",
        country: "",
        phoneNumber: "",
        language: "",
        ishost: false
    });
    const handleSignup = (evt) => {
        evt.preventDefault();

        addUser({variables: {newUser: account}});


    };

    return (
        <Wrapper className={"m-auto pl-5"}>

            <FormContainer>
                <Second>Sign up</Second>
                <Form>
                    <div className="form-group mr-3">
                        <label htmlFor="inputEmail1">Email address</label>
                        <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email"
                               onChange={evt => {
                                   setAccount({...account, email: evt.target.value})
                               }}/>
                        <small id="emailHelp" className="form-text text-muted">example@somewhere.com
                        </small>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputPassword1">Password</label>
                        <input type="password" className="form-control" id="inputPassword1" placeholder="Password"
                               onChange={evt => {
                                   setAccount({...account, password: evt.target.value})
                               }}/>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name"
                               onChange={evt => {
                                   setAccount({...account, firstName: evt.target.value})
                               }}/>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name"
                               onChange={evt => {
                                   setAccount({...account, lastName: evt.target.value})
                               }}/>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputAddress">Street</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Address"
                               onChange={evt => {
                                   setAccount({...account, street: evt.target.value})
                               }}/>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputCountry">Country</label>
                        <input type="text" className="form-control" id="inputCountry" placeholder="Country"
                               onChange={evt => {
                                   setAccount({...account, country: evt.target.value})
                               }}/>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                        <input type="telephone" className="form-control" id="inputPhoneNumber"
                               placeholder="Phone Number"
                               onChange={evt => {
                                   setAccount({...account, phoneNumber: evt.target.value})
                               }}/>
                    </div>
                    <button className={"px-4 py-1 btn mr-3 btn-warning  p-3"} type="submit"
                            onClick={evt => handleSignup(evt)}>Sign up
                    </button>

                    </Form>
            </FormContainer>
        </Wrapper>
);
}

