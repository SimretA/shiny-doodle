import  React from 'react';

export function Cart(props) {
    return(
        <div className={"position-fixed"}>
            <h1>Cart</h1>
            <ul>
                {props.cart.map((item, index)=><li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}