import React from 'react';
import {Wrapper, Second, Button, SVG, FormContainer} from "../login/login.styled";

export function Signup() {
    return(
        <Wrapper className={"mx-auto my-5  pl-5"}>
            <SVG viewBox={"0 0 500 500"} preserveAspectRatio={"none"}>
                <path
                    d="M 0 50 L 500 500 L 0 500 z"
                    fill="#FFF700"/>
            </SVG>
            <FormContainer>
                <form >
                    <Second>Sign up</Second>
                    <div className="form-group">
                        <label htmlFor="inputEmail1">Email address</label>
                        <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">example@somewhere.com
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword1">Password</label>
                        <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCountry">Country</label>
                        <input type="text" className="form-control" id="inputCountry" placeholder="Country" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                        <input type="telephone" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" />
                    </div>
                    <Button className={"px-4 py-1"} type="submit" >Sign up</Button>
                </form>
            </FormContainer>
        </Wrapper>
    );
}

