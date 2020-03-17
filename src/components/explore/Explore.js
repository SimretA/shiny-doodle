import  React from 'react';
import {CardItem} from "../card-item/Card-item";

export function Explore(props) {
    return(
        <div className={"container"}>
            <div className={"row p-3 h-50"} style={{backgroundColor:"#f9d976", overflowY:"hidden", borderRadius:"2px"}}>
                {[1,2,1,1,1,3].map(_=><CardItem addToCart={props.addToCart}/>)}
            </div>

        </div>

);
}
