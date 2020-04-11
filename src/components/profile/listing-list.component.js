import React from 'react';
import {Fade} from "react-reveal";
import {CardItem} from "../card-item/Card-item";
import {useQuery} from "@apollo/react-hooks";
import {GET_LISTING_BY_USER} from "../../query/listing";
import Loading from "../shared/Loading.component";
import ListDetail from "../listing-details/Listing-detail.component";


export default function ({userId}) {


    const [visible,setVisible] = React.useState(false);
    const [selectedListing,setSelectedListing] = React.useState(false);
    const {data, loading, error} = useQuery(GET_LISTING_BY_USER, {variables: {id: userId}});


    if(loading){
        return <Loading />
    }
    if(data) {
        console.log(data);

        return<>
            <ListDetail owner={true} closeModal={()=>setVisible(false)} showModal={visible} data={selectedListing}/>

            {!visible?<>
                {data.listingByUser.length === 0 ? <h1>Add a Listing To Become a Host</h1> : <></>}
                {data.listingByUser.map(datum => <Fade left><CardItem editable={true} handleClick={() => {
                    setVisible(true);
                    setSelectedListing(datum);
                }} key={datum.id} {...datum} /></Fade>)}
            </>:<></>}


        </>;
    }
}
