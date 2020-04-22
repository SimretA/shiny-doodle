import React, {useContext} from 'react';
import {Data, InlineWrapper} from "./List-detail.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {Button, TextInput} from "../shared/FormComponents";
import {AuthContext} from "../../context/AuthContext";
import {ADD_BOOKING} from "../../query/booking";
import {useMutation} from "@apollo/react-hooks";
import Loading from "../shared/Loading.component";
import moment from "moment";
import Confetti from 'react-confetti';

export default function AddBooking(props) {

    const [auth, setAuth] = useContext(AuthContext);

    const [addBooking, addedBooking] = useMutation(ADD_BOOKING);
    const[loading, setLoading] = React.useState(false);


    const [error, setError] = React.useState("");
    const [booking, setBooking] = React.useState({
        startBookDate: null,
        endBookDate: null
    });


    const handleAdd = (event) => {
        event.preventDefault();
        const formattedStartDate = moment(booking.startBookDate).format('MM-DD-YYYY');
        const formattedEndDate = moment(booking.endBookDate).format('MM-DD-YYYY');

        if (booking.startBookDate && booking.endBookDate) {
            addBooking(
                {
                    variables: {
                        newBooking: {
                            startBookDate: formattedStartDate,
                            endBookDate: formattedEndDate,
                            user: {id: auth.account.id},
                            listing: {id: props.listingId}
                        }
                    }
                }
            )
                .catch(e => {
                    console.log(e);
                    if (e.graphQLErrors) {
                        switch (e.graphQLErrors[0].message) {
                            case "Users cant book their own listing":
                                setError("You can't book your own listing");
                                break;
                            case "Booking existing for the listing at the start date":
                                setError("The listing is not available at this time");
                                break;
                            case "Booking at start date exists for user":
                                setError("You can't book different booking on the same date");
                                break;
                            default:
                                setError("Something went wrong");
                                break;
                        }
                        // setError(e.graphQLErrors[0].message);
                    }
                })
        }

    };
    React.useEffect(() => {
        console.log(addedBooking)
    }, [addedBooking]);

    React.useEffect(() => {
        console.log(booking)
    }, [booking]);


    if(loading){
        return <Loading/>
    }
    if (addedBooking.loading) {
        return (
            <Loading/>

        );
    }

    const handlePay = (bookingId) =>{
        //"44723526-0438-458d-bc94-151620c0b13a"

        const opts = {
            bookingId: bookingId

        };
        setLoading(true);
        fetch('https://alama-airbnb.herokuapp.com/pay', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts)
        }).then((response) => {
            return response.text();
        }).then((data) => {
            console.log("From api post ",data);
            window.location.replace(data);
        });
    };
    if (addedBooking.data) {
        console.log(addedBooking.data);
        const bookingId = addedBooking.data.addBooking.id;

        return <>
            <Confetti
                width={100}
                height={500}
            />
            <p style={{fontSize:"18"}}>Almost there!</p>
            <InlineWrapper>

                <p style={{fontSize:"18"}}><small> Booked from </small> {new Date(booking.startBookDate).toDateString()}
                    <small> 'till </small> {new Date(booking.endBookDate).toDateString()}</p>
            </InlineWrapper>
            <p> Please confirm your booking and finish payment.</p>
            <Button onClick={()=>handlePay(bookingId)}>Pay ${(((new Date(booking.endBookDate)).getTime() - (new Date(booking.startBookDate)).getTime()) / (1000 * 3600 * 24)) * parseFloat(props.price)}</Button>
        </>;
    }



    const datePicker = (event, date) => {

        if (date == "start") {
            if (((new Date(event.target.value)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24) < 3) {
                setError("Book at least three days ahead from today please.");

            }

            else if (booking.endBookDate && ((new Date(booking.endBookDate)).getTime() < (new Date(event.target.value)).getTime())) {
                setError("Fix checkout day please...");


            }

            else {
                setBooking({...booking, startBookDate: event.target.value});
                setError("");
            }
        }
        else {
            if (booking.startBookDate && ((new Date(event.target.value)).getTime() < (new Date(booking.startBookDate)).getTime())) {
                setError("Fix checkout day please...");

            }
            else if (((new Date(event.target.value)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24) < 4) {
                setError("Checkout date can't be this early.");

            }
            else{

                setError("");
                setBooking({...booking, endBookDate: event.target.value});
            }

        }

    };







    return <>
        {auth.isAuthed ?
            <>

                <p style={{color: 'red'}}>{error}</p>
                <InlineWrapper>
                    <Data><FontAwesomeIcon icon={faCalendar}
                                           style={{fontSize: 25, marginRight: 5}}/></Data>

                    <TextInput type={"date"}
                               onChange={(event) => {
                                   console.log(event.target.value);
                                   datePicker(event, "start");
                               }}
                    />
                </InlineWrapper>
                <InlineWrapper>
                    <TextInput type={"date"}
                               onChange={(event) => datePicker(event, "end")}/>

                    <Button onClick={handleAdd}>Book</Button>
                </InlineWrapper>
                <Button
                    onClick={props.closeModal}> Cancel </Button></>
            :
            <h4>Please Login to Book</h4>}

    </>

};
