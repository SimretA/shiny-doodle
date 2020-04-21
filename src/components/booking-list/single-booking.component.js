import React from 'react';
import Styled from 'styled-components';
import {useQuery} from "@apollo/react-hooks";
import {GET_LISTING_BY_ID} from "../../query/listing";
import Loading from "../shared/Loading.component";

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



    const {data, loading, error} = useQuery(GET_LISTING_BY_ID, {variables: {id: props.data.listing.id}});


    if(loading){
        return<Loading />
    }
    if(data){
        return <Wrapper onMouseEnter={()=>props.hoverOn && props.hoverOn(data.listing.geolocations)} >

            <h4>{data.listing.name}</h4>
            <p>{data.listing.street}, {data.listing.city} {data.listing.country}</p>
            <h5>{new Date(props.data.startBookDate).toDateString()} - {new Date(props.data.endBookDate).toDateString()}</h5>

        </Wrapper>
    }
    else {
        return <Wrapper onMouseEnter={() => props.hoverOn(null)} >

            <h4>{props.data.listing.name}</h4>
            <p>{props.data.listing.street}, {props.data.listing.city} {props.data.listing.country}</p>
            <h5>{new Date(props.data.startBookDate).toDateString()} - {new Date(props.data.endBookDate).toDateString()}</h5>

        </Wrapper>
    }
}
