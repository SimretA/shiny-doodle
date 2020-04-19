import React from 'react';
import {Fade} from "react-reveal";
import {CardItem} from "../card-item/Card-item";
import {useQuery} from "@apollo/react-hooks";
import {GET_LISTING_BY_USER} from "../../query/listing";
import Loading from "../shared/Loading.component";
import {Modal} from "../shared/custom-modal";
import {EditListing} from "./edit-listing.component";


export default function ({userId}) {


    const[showModal, setShowModal] = React.useState(false);
    const [selectedListing,setSelectedListing] = React.useState({});
    const {data, loading, error, refetch} = useQuery(GET_LISTING_BY_USER, {variables: {id: userId}});


    React.useEffect(()=>{console.log("seleceted lsting",selectedListing)},[selectedListing]);
    if(loading){
        return <Loading />
    }
    if(data) {
        console.log(data);

        return<>


                <Modal show={showModal} close={()=>setShowModal(false)}>
                    <EditListing refetch={refetch} close={()=>setShowModal(false)} selectedListing={selectedListing}/>

                </Modal>

                {data.listingByUser.length === 0 ? <h1>Add a Listing To Become a Host</h1> : <></>}
                {data.listingByUser.map(datum => <Fade left><CardItem editable={true} handleClick={(data) => {
                    setShowModal(true);
                    setSelectedListing(data);
                    console.log("clicked");
                }} key={datum.id} {...datum} /></Fade>)}



        </>;
    }
}
