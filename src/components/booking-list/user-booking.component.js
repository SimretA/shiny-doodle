import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        border: 1px yellow solid;
        margin-top: 10px;
        margin-bottom: 10px;
        :hover{
            margin-top: 0px;
            margin-bottom: 17px;
        }

`;

export function BookingItem(props) {



        return <Wrapper >

            <h4> Booked by: {props.data.user.firstName} {props.data.lastName} </h4>
            {/*<p>{props.data.listing.street}, {props.data.listing.city} {props.data.listing.country}</p>*/}
                <h5>From {new Date(props.data.startBookDate).toDateString()}</h5>
                <h5>until {new Date(props.data.endBookDate).toDateString()}</h5>

        </Wrapper>

}
