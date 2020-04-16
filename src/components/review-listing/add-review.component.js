import React, {useContext} from 'react';
import {Button, TextAreaInput} from "../shared/FormComponents";
import {ADD_REVIEW} from "../../query/review";
import {useMutation} from "@apollo/react-hooks";
import {AuthContext} from "../../context/AuthContext";
import {Fade} from "react-reveal";
import Loading from "../shared/Loading.component";
import ReviewStrip from "./review-strip.component";

export default function AddReview(props) {
    const [review, setReview] = React.useState("");
    const [auth, setAuth] = useContext(AuthContext);
    const [addReview, addedReview] = useMutation(ADD_REVIEW);
    const handleAdd = () => {
        if (review.trim() === "") {
            return;
        }

        console.log(review);
        console.log("account id", auth.account.id);
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
        )

    };
    if (addedReview.loading) {
        return (
            <Fade left>
                <Loading/>
            </Fade>
        );
    }
    if (addedReview.data) {
        console.log(addedReview.data);
        return <ReviewStrip data={addedReview.data.addReview}/>
    }
    return <div>
        {auth.isAuthed ?
            <>
                <TextAreaInput rows="5" cols="60" onChange={event => setReview(event.target.value)}/>
                <Button onClick={handleAdd}>Send</Button>
            </> :
            <a>Login to leave a review</a>}
    </div>
}
