import React, {useContext} from 'react';
import {Data, InlineWrapper, StickyColumn} from "./List-detail.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {Button, TextInput} from "../shared/FormComponents";
import {AuthContext} from "../../context/AuthContext";
import {ADD_BOOKING} from "../../query/booking";
import {useMutation} from "@apollo/react-hooks";
import {Fade} from "react-reveal";
import Loading from "../shared/Loading.component";
import ReviewStrip from "../review-listing/review-strip.component";

export default function AddBooking(props) {

    const [auth, setAuth] = useContext(AuthContext);

    const [addBooking, addedBooking] = useMutation(ADD_BOOKING);


    const [booking, setBooking] = React.useState({
        startBookDate: null,
        endBookDate: null
        // listing:{id: props.listingId}
    });

    const handleAdd = (event) => {
        event.preventDefault();
        if(booking.startBookDate && booking.endBookDate) {
            addBooking(
                {
                    variables: {
                        newBooking: {
                            ...booking,
                            user: {id: auth.account.id},
                            listing: {id: props.listingId}
                        }
                    }
                }
            )
        }

    };
    if (addedBooking.loading) {
        return (
                <Loading/>

        );
    }
    if (addedBooking.data) {
        console.log(addedBooking.data);
        return <p>Enjoy</p>
    }
    return <>
        {auth.isAuthed ?
            <>
                <InlineWrapper>
                    <Data><FontAwesomeIcon icon={faCalendar}
                                           style={{fontSize: 25, marginRight: 5}}/></Data>

                    <TextInput type={"date"}
                               onChange={(event) => setBooking({...booking, startBookDate: event.target.value})}/>
                </InlineWrapper>
                <InlineWrapper>
                    <TextInput type={"date"}
                               onChange={(event) => setBooking({...booking, endBookDate: event.target.value})}/>

                    <Button onClick={handleAdd}>Book</Button>
                </InlineWrapper>
                <Button
                    onClick={props.closeModal}> Cancel </Button></>
            :
            <h4>Please Login to Book</h4>}

    </>

};
