import React from 'react';
import {CardItem} from "../card-item/Card-item";
import ListDetail from "../listing-details/Listing-detail.component";
import {useQuery} from "@apollo/react-hooks";
import {GET_LISTINGS} from "../../query/listing";
import Loading from "../shared/Loading.component";
import {Fade} from "react-reveal";
import {Wrapper} from "./explore.styled";

export function Explore(props) {


    const [visible, setVisible] = React.useState(false);
    const [selectedListing, setSelectedListing] = React.useState({});

    const handleClick = (data) => {

        setVisible(true);
        setSelectedListing(data);

    };
    const closeModal = () => {
        setVisible(false);
    };

    const {loading, error, data} = useQuery(GET_LISTINGS);

    if (loading) {

        return (
            <Fade left>
                <Loading/>
            </Fade>
        );
    }
    if (error) {
        console.log(error);
        return <div>ERROR</div>
    }
    const book = (listing) => {
        console.log(listing);
    };
    // console.log(data);
    return (

        <>
            <ListDetail closeModal={closeModal} showModal={visible} data={selectedListing}/>
            {!visible?
                <Wrapper>
                    {data.listings.map(datum => <Fade left><CardItem handleClick={handleClick} key={datum.id} {...datum}
                                                                     book={book}/></Fade>)}
                </Wrapper>:<></>}

        </>
    );
}
