import React, {useState} from 'react';
import { Second, Button, SVG, FormContainer} from "../login/login.styled";
import {Wrapper, Form} from "./signup.styled";

export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSignup=(evt)=>{
        evt.preventDefault();
        alert("yoo");

    };
    return (
        <Wrapper className={"m-auto pl-5"}>
            <SVG viewBox={"0 0 500 500"} preserveAspectRatio={"none"}>
                <path
                    d="M 0 50 L 500 500 L 0 500 z"
                    fill="#FFF70022"/>
            </SVG>
            <FormContainer>
                <Second>Sign up</Second>
                <Form>
                    <div className="form-group mr-3">
                        <label htmlFor="inputEmail1">Email address</label>
                        <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">example@somewhere.com
                        </small>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputPassword1">Password</label>
                        <input type="password" className="form-control" id="inputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Address"/>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputCountry">Country</label>
                        <input type="text" className="form-control" id="inputCountry" placeholder="Country"/>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                        <input type="telephone" className="form-control" id="inputPhoneNumber"
                               placeholder="Phone Number"/>
                    </div>
                    <Button className={"px-4 py-1 btn mr-3"} type="submit" onClick={evt=>handleSignup(evt)}>Sign up</Button>

                </Form>
            </FormContainer>
        </Wrapper>
    );
}

