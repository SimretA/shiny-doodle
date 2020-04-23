import React, {useContext, useState} from 'react';
import {Wrapper, ListWrapper, MapWrapper} from "./booking-list.styled";
import {useLazyQuery} from "@apollo/react-hooks";
import {GET_BOOKING_BY_USER} from "../../query/booking";
import {AuthContext} from "../../context/AuthContext";
import Loading from "../shared/Loading.component";
import {BookingItem} from "./single-booking.component";
import Map from "../shared/Location-picker.component";


export function BookingList(props) {


    const [auth, setAuth] = useContext(AuthContext);

    const [loc, setLoc] = useState([{
        lat: null,
        long: null
    }]);

    const [getBooking, {data, loading, error, refetch}] = useLazyQuery(GET_BOOKING_BY_USER);

    React.useEffect(() => {
        getBooking({variables: {id: auth.account.id}});
    }, []);

    if (loading) {
        return <Loading/>
    }
    if(error){
        return <div>Something went wrong</div>
    }
    else if (data) {
        console.log("bookings are", data);


        return <Wrapper>

            <ListWrapper>
                {data.bookingByUser.map(_data => <BookingItem
                    hoverOn={(loc) => {
                        setLoc(loc);
                    }}
                    hoverOff={() => {
                        setLoc(null)
                    }}
                    data={_data}
                    refetch={refetch}
                />)}

            </ListWrapper>
            <MapWrapper>
                <Map loc={loc} width={"100%"} height={"100%"} handleMark={() => {
                }}/>
            </MapWrapper>

        </Wrapper>
    }
    else {
        return <>Wait a minute</>
    }

}
