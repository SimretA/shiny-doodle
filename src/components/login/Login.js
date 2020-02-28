import React from 'react';
import {Wrapper, Second, Button, SVG, FormContainer} from "./login.styled.components";

export function Login() {
    return(
        <Wrapper className={"mx-auto my-5  pl-5"}>
            <SVG viewBox={"0 0 500 500"} preserveAspectRatio={"none"}>
                <path
                    d="M 0 50 L 500 500 L 0 500 z"
                    fill="#FFF700"/>
            </SVG>
            <FormContainer>
                <form >
                    <Second>Login</Second>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">example@somewhere.com
                            </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <Button className={"px-4 py-1"} type="submit" >Login</Button>
                </form>
            </FormContainer>
        </Wrapper>
    );
}

