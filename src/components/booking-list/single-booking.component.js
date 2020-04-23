import React from 'react';
import Styled from 'styled-components';
import {useMutation, useQuery} from "@apollo/react-hooks";
import {CALCEL_LISTING, GET_LISTING_BY_ID} from "../../query/listing";
import Loading from "../shared/Loading.component";
import {HostDetail} from "./host-detail.component";
import {Fade} from "react-reveal";
import {Button} from "../shared/FormComponents";
import {PaypalAccount} from "../shared/PaypalAccount.component";
import {Prompt} from "../shared/Prompt.component";
import {ADD_BOOKING} from "../../query/booking";
import moment from "moment";
import {useHistory} from "react-router-dom";
import {logout} from "../../control/auth";

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


    const [expand, setExpand] = React.useState(false);
    const [showPaypal, setShowPaypal] = React.useState(false);
    const [showPrompt, setShowPrompt] = React.useState(false);
    const {data, loading, error} = useQuery(GET_LISTING_BY_ID, {variables: {id: props.data.listing.id}});
    const [cancelBooking, canceledBooking] = useMutation(CALCEL_LISTING);


    let history = useHistory();

    const start = moment(new Date(props.data.startBookDate), "YYYY-MM-DD");
    const now = moment(new Date(), "YYYY-MM-DD");

    const diff = moment.duration(start.diff(now)).asDays();
    // console.log("the difference is ", moment.duration(start.diff(now)).asDays());

    const handleCancel = ()=>{
        cancelBooking({variables: {
                cancelBookingInput:{
                    id: props.data.id
                }
            }}).catch(e=>{
                if(e.message=="GraphQL error: Unauthenticated!!"){
                    logout(history);
                }
        });

    };
    if(canceledBooking.data){
        props.refetch();
    }
    if (loading) {
        return <Loading/>
    }
    if (data) {
        return <>
            <Prompt show={showPrompt} close={()=>setShowPrompt(false)} onYes={()=>{
                setShowPaypal(true);
                setShowPrompt(false);
            }} message={diff<1?"You might not be eligible for any refund":"If you cancel now only half price will be refunded."}/>
            <PaypalAccount show={showPaypal} close={()=>{
                setShowPaypal(false);
                handleCancel();

            }} message={"The refund will be deposited to this account"}/>
            <Wrapper style={{textTransform: "capitalize"}} onClick={() => setExpand(!expand)}
                     onMouseEnter={() => props.hoverOn && props.hoverOn(data.listing.geolocations)}>

                <h4>{data.listing.name}</h4>
                <p>{data.listing.street}, {data.listing.city} {data.listing.country}</p>
                <h5>{new Date(props.data.startBookDate).toDateString()} - {new Date(props.data.endBookDate).toDateString()}</h5>

                {expand ? <Fade down>
                    <HostDetail user={data.listing.user}/>
                    <Button style={{}} onClick={() => {

                        setShowPrompt(true);
                    }}>Cancel</Button>
                </Fade> : <></>}

            </Wrapper>
        </>
    }
    else {
        return <Wrapper onMouseEnter={() => props.hoverOn(null)}>

            <h4>{props.data.listing.name}</h4>
            <p>{props.data.listing.street}, {props.data.listing.city} {props.data.listing.country}</p>
            <h5>{new Date(props.data.startBookDate).toDateString()} - {new Date(props.data.endBookDate).toDateString()}</h5>


        </Wrapper>
    }
}
