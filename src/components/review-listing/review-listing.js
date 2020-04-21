import React from 'react';
import ReviewStrip from './review-strip.component';
import AddReview from './add-review.component';
import {DELETE_REVIEW, REVIEW_BY_LISTING} from "../../query/review";
import {useMutation, useQuery} from "@apollo/react-hooks";
import Loading from "../shared/Loading.component";
import {Prompt} from "../shared/Prompt.component";

export default function Review(props) {

    const{loading, error, data, refetch} = useQuery(REVIEW_BY_LISTING,{
        variables:{id:props.listingId}
    });



    if(error){
        console.log(error);
    }
    if(loading){
        return<Loading/>;
    }
    console.log(data);

        return <>

            <AddReview refetch={refetch} listingId={props.listingId}/>

            {data&&data.reviewByListing.map(_review => <ReviewStrip refetch={refetch}   key={_review.id} data={_review} />)}
        </>

}
