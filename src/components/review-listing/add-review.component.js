import React, {useContext} from 'react';
import {Button, TextAreaInput} from "../shared/FormComponents";
import {ADD_REVIEW} from "../../query/review";
import {useMutation} from "@apollo/react-hooks";
import {AuthContext} from "../../context/AuthContext";
import {Fade} from "react-reveal";
import Loading from "../shared/Loading.component";
import ReviewStrip from "./review-strip.component";
import Success from "../shared/Success.component";
import {logout} from "../../control/auth";
import {useHistory} from "react-router-dom";

export default function AddReview(props) {
    const [review, setReview] = React.useState("");
    let history = useHistory();
    const handleAdd = () => {
        if (review.trim() === "") {
            return;
        }

        addReview(
            {
                variables: {
                    newReview: {
                        content: review,
                        user: {id: auth.account.id},
                        listing: {id: props.listingId}
                    }
                }
            }
        ).catch(e=>{
            if(e.message=="GraphQL error: Unauthenticated!!"){
                logout(history);
            }
        }
    )

    };
    const [auth, setAuth] = useContext(AuthContext);
        const [addReview, addedReview] = useMutation(ADD_REVIEW);
    if (addedReview.loading) {
        return (
            <Fade left>
                <Loading/>
            </Fade>
        );
    }
    if (addedReview.data) {
        //refetch all reviews after adding a new one
        props.refetch && props.refetch();
         return <Success message={'Thank you for the review'}/>
    }
    return <div style={{display:"flex", flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap", margin:"10px"}}>
        {auth.isAuthed ?
            <>
                <TextAreaInput  onChange={event => setReview(event.target.value)} placeholder={"Leave a Review"}/>
                <Button onClick={handleAdd}>Send</Button>
            </> :
            <a>Login to leave a review</a>}
    </div>
}
