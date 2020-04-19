import React from 'react';
import ReviewStrip from './review-strip.component';
import AddReview from './add-review.component';
import {REVIEW_BY_LISTING} from "../../query/review";
import { useQuery} from "@apollo/react-hooks";
import Loading from "../shared/Loading.component";

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

            {data&&data.reviewByListing.map(_review => <ReviewStrip data={_review} />)}
        </>

}
