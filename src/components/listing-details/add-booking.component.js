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
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';

export default function AddBooking(props) {

    const [auth, setAuth] = useContext(AuthContext);

    const [addBooking, addedBooking] = useMutation(ADD_BOOKING);


    const [error, setError] = React.useState("");
    const [booking, setBooking] = React.useState({
        startBookDate: null,
        endBookDate: null
        // listing:{id: props.listingId}
    });

    // const { width, height } = useWindowSize();

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
                        setError(e.graphQLErrors[0].message);
                    }
                })
        }

    };
    React.useEffect(() => {
        console.log(addedBooking)
    }, [addedBooking]);
    if (addedBooking.loading) {
        return (
            <Loading/>

        );
    }
    if (addedBooking.data) {
        console.log(addedBooking.data);
        return <>
            <Confetti
                width={500}
                height={500}
            />
            <p>Enjoy</p>
        </>
    }
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
                                   setBooking({...booking, startBookDate: event.target.value});
                               }}/>
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
