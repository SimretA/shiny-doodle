import React from 'react';
import ReviewStrip from './review-strip.component';
import AddReview from './add-review.component';
import {REVIEW_BY_LISTING} from "../../query/review";
import {useLazyQuery, useQuery} from "@apollo/react-hooks";
import Loading from "../shared/Loading.component";

export default function Review(props) {

    //console.log(props);'
    // const [getReviews, {data, loading}] = useLazyQuery(REVIEW_BY_LISTING);
    const{loading, error, data} = useQuery(REVIEW_BY_LISTING,{
        variables:{id:props.listingId}
    });

    // React.useEffect(()=>{
    //     refresh();
    // },[]);
    //
    // const refresh=()=>{
    //     getReviews({variables: {id: props.listingId}});
    //
    //
    // };

    if(error){
        console.log(error);
    }
    if(loading){
        return<Loading/>;
    }
    console.log(data);

        return <>

            <AddReview listingId={props.listingId}/>

            {data&&data.reviewByListing.map(_review => <ReviewStrip data={_review} />)}
        </>

}
