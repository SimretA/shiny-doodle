import React, {useState, useEffect} from 'react';
import './App.css';
import {Nav} from './../navigation/Nav';
import  {Home} from './../home/Home';
import {Cart} from "../cart/Cart";
import {Explore} from "../explore/Explore";
import {Login} from "../login/Login";
import {Signup} from "../signup/Signup";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App(props) {
    const [cart, setCart] = useState([]);
    useEffect(
        ()=>{

        }, [cart]
    );

    const addToCart = (evt)=> {


        setCart([...cart, evt.target.value]);
        console.log(cart);
    };

  return (
      <Router>
        <div className="App">
          <Nav/>
        </div>

          <div className={"container-fluid  my-3 w-100 h-100 d-inline-block "}>
              <div className={"row"}>
                  <div className={"col-12 m-auto"}>

                      <Switch>
                          <Route path={"/"}  exact component={Home}/>
                          <Route path={"/cart"} exact  render={()=><Cart {...props} cart={cart} />}/>
                          <Route path={"/explore"} exact render={()=><Explore {...props} addToCart={addToCart}/>}/>
                          <Route path={"/login"} exact render={()=><Login/>}/>
                          <Route path={"/signup"} exact render={()=><Signup/>}/>
                      </Switch>
                  </div>
                  {/*<div className={".col-6 .col-md-4"}>*/}
                      {/*<Cart cart={cart}/>*/}
                  {/*</div>*/}
              </div>
          </div>
      </Router>
  );
}

export default App;
