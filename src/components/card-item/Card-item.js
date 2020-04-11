import React from 'react';
import {Wrapper} from './card-item.styled'
import {Button} from "../shared/FormComponents";

export function CardItem(props) {
    const value = props.id;
    // console.log('image', props);
    return (
        <Wrapper onClick={() => {
            props.handleClick(props)
        }}>
            <div>
                <div style={{width: 250, height: 250}}>
                    <img className="card-img-top"
                         src={props.images&&props.images.length > 0 ? props.images[0].url : "https://picsum.photos/id/870/200/300?grayscale&blur=2"}
                         alt="Card image cap"
                         style={{width: 250, height: 250}}/>
                </div>
                <div>
                    <h5>{props.name}</h5>
                    <p>{props.city}, {props.country}</p>
                    <p>{props.reviews?`${props.reviews.length} Reviews`:""} STARS GO HERE</p>
                    <Button> ${props.price} </Button>


                </div>
            </div>
        </Wrapper>
    );
}
