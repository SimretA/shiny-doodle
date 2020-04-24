import React from 'react';
import {CardItem} from "../card-item/Card-item";
import ListDetail from "../listing-details/Listing-detail.component";
import {useQuery} from "@apollo/react-hooks";
import {GET_LISTINGS} from "../../query/listing";
import Loading from "../shared/Loading.component";
import {Fade} from "react-reveal";
import {Wrapper} from "./explore.styled";
import {Modal} from "../shared/custom-modal";

export function Explore(props) {


    const [visible, setVisible] = React.useState(false);
    const [selectedListing, setSelectedListing] = React.useState({});

    const [showModal, setShowModal] = React.useState(false);

    const handleClick = (data) => {

        //expand listing detail
        setVisible(true);
        setSelectedListing(data);
        setShowModal(true);

    };
    const closeModal = () => {
        setVisible(false);
    };

    const {loading, error, data} = useQuery(GET_LISTINGS);

    if (loading) {

        return (
                <Loading/>

        );
    }
    if (error) {
        console.log(error);
        return <div style={{margin:"100px"}}>Something Went Wrong</div>
    }

    return (

        <>
            <Modal close={() => setShowModal(false)} show={showModal}>
                <ListDetail closeModal={closeModal} showModal={visible} data={selectedListing}/>
            </Modal>
            <Wrapper>
                {data.activeListings.map(datum => <Fade left><CardItem handleClick={handleClick}
                                                                       key={datum.id} {...datum}
                /></Fade>)}
            </Wrapper>

        </>
    );
}
