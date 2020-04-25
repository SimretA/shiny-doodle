import React from 'react';
import Styled from 'styled-components';
import {useLazyQuery} from "@apollo/react-hooks";
import {GET_BOOKING_BY_LISTING} from "../../query/booking";
import Loading from "../shared/Loading.component";
import {BookingItem} from "../booking-list/user-booking.component";

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
`;

export function ListingBookingList(props) {

    React.useEffect(() => {
        // console.log("Listing listtttt ", props);
        fetch();
    }, [props]);
    const [getBooking, {data, loading}] = useLazyQuery(GET_BOOKING_BY_LISTING);

    const fetch = () => {

        if (props.listingId) {
            getBooking({variables: {id: props.listingId}});


        }
    };

    if (loading) {
        return <Loading/>
    }
    if (data) {
        // console.log(data);


        return <>
            {
                data.bookingByListing.length>0?<h5>Any Edit on this listing will be notified to all the bookings, yet you have to provide the agreed upon
                    listing for them</h5>:
                    <h5>No Bookings yet.</h5>

            }
            <Wrapper>


                {/*Helloooo*/}
                {data.bookingByListing.map(_data => <BookingItem data={_data}/>)}

            </Wrapper>
        </>
    }
    return <></>;


}
