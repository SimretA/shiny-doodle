import React, {useState, useEffect} from 'react';
import './App.css';
import {Nav} from './../navigation/Nav';
import {Home} from './../home/Home';
import {Explore} from "../explore/Explore";
import {Login} from "../login/Login";
import {Signup} from "../signup/Signup";
import {AddListing} from "../add-listing/Add-listing";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

//APOLLO
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";
import { useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'https://alama-airbnb.herokuapp.com/graphql'
});


function App(props) {

    const [cart, setCart] = useState([]);



    const addToCart = (evt) => {


        setCart([...cart, evt.target.value]);
        console.log(cart);
    };


    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Router>

                    <Nav/>


                    <div className={"container-fluid  w-100 h-100 d-inline-block "}>
                        <div className={"row gradient"}>
                            <div className={"col-12 mx-auto  my-3 p-5"}>

                                <Switch>
                                    <Route path={"/"} exact component={Home}/>
                                    <Route path={"/add-listing"} exact
                                           render={() => <AddListing {...props} cart={cart}/>}/>
                                    <Route path={"/explore"} exact
                                           render={() => <Explore {...props} />}/>
                                    <Route path={"/login"} exact render={() => <Login/>}/>
                                    <Route path={"/signup"} exact render={() => <Signup/>}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        </ApolloProvider>
    );
}

export default App;
