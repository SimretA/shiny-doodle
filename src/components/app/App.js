import React, {useState, useContext} from 'react';
import './App.css';
import {AuthContext} from "../../context/AuthContext";
import Nav from './../navigation/AppNav';
// import {Nav} from './../navigation/Nav';
import {Home} from './../home/Home';
import {Explore} from "../explore/Explore";
import {Login} from "../login/Login";
import {Signup} from "../signup/Signup";
import {AddListing} from "../add-listing/Add-listing";
import Profile from "../profile/Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";

//APOLLO
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";


const client = new ApolloClient({
    uri: 'https://alama-airbnb.herokuapp.com/graphql',
    request: (operation) => {
        const token = localStorage.getItem("token");
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
});


function App(props) {

    const [auth, setAuth] = useContext(AuthContext);

    function PrivateRoute({children, ...rest}) {
        return (
            <Route
                {...rest}
                render={({location}) =>
                    auth.isAuthed ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {from: location}
                            }}
                        />
                    )
                }
            />
        );
    }

    return (

        <ApolloProvider client={client}>
            <div className="App">
                <Router>

                    <Route component={Nav}/>


                    <div style={{marginRight: "20px", marginLeft: "20px", marginTop: "30px"}}>

                        <Switch>
                            <Route path={"/"} exact component={Home}/>
                            <PrivateRoute path={"/add-listing"} exact
                            >
                                <AddListing/>
                            </PrivateRoute>
                            <Route path={"/explore"} exact
                                   render={() => <Explore {...props} />}/>
                            <Route path={"/login"} exact component={Login}/>
                            <Route path={"/signup"} exact render={() => <Signup/>}/>

                            <PrivateRoute path={"/profile"} exact>
                                <Profile/>
                            </PrivateRoute>
                        </Switch>
                    </div>

                </Router>
            </div>
        </ApolloProvider>
    );
}

export default App;
