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
import {BookingList} from "../booking-list/booking-list";


const client = new ApolloClient({
    uri: 'https://alama-airbnb.herokuapp.com/graphql',
    request: (operation) => {
        const token = localStorage.getItem("token");
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    },
    onError: ({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors) {
            for (let err of graphQLErrors) {
                // handle errors differently based on its error code
                switch (err.extensions.code) {
                    // case 'UNAUTHENTICATED':
                    //     //TODO fix this
                    //     // old token has expired throwing AuthenticationError,
                    //     // one way to handle is to obtain a new token and
                    //     // add it to the operation context
                    //     // const headers = operation.getContext().headers;
                    //     // operation.setContext({
                    //     //     headers: {
                    //     //         ...headers,
                    //     //         authorization: getNewToken(),
                    //     //     },
                    //     // });
                    //     // Now, pass the modified operation to the next link
                    //     // in the chain. This effectively intercepts the old
                    //     // failed request, and retries it with a new token
                    //      return forward(operation);

                    // handle other errors
                    case "INTERNAL_SERVER_ERROR":
                        console.log("check");
                        console.log(err);
                        break;
                    default:
                        console.log("check");
                        console.log(err);
                        return forward(operation);

                }
            }
        }
    },
});


function App(props) {

    const [auth, setAuth] = useContext(AuthContext);

    React.useEffect(()=>{
        if(localStorage.getItem("token") && localStorage.getItem("userId")){
            setAuth({...auth, isAuthed: true,
                token: localStorage.getItem("token"),
                account: { id: localStorage.getItem("userId")}});

        }


    },[]);


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

                            <PrivateRoute path={"/bookings"} exact>
                                <BookingList />
                            </PrivateRoute>
                        </Switch>
                    </div>

                </Router>
            </div>
        </ApolloProvider>
    );
}

export default App;
