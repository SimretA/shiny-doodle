import  React from 'react';
import {CardItem} from "../card-item/Card-item";
import ListDetail from "../listing-details/Listing-detail.component";

export function Explore(props) {
    const [showModal, setShowModal] = React.useState(false);

    const handleClick = () =>{

    };
    return(
        <div className={"container"}>
            <div className={"row"}>
                {[1,2,1,1,1,3].map(_=><CardItem addToCart={props.addToCart}/>)}
            </div>
            <ListDetail showModal={showModal}/>

        </div>

);
}
