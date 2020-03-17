import  React from 'react';

export function AddListing(props) {
    return(
        <div className={"position-fixed"}>
            <h1>Listing</h1>
            <ul>
                {props.cart.map((item, index)=><li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}
