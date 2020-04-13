import  React from 'react';
import Search from "./../search/Search";
import Loading from "../shared/Loading.component";
import {Container, SearchContainer, RightSideBar} from "./home.styled";
import {useLazyQuery} from "@apollo/react-hooks";
import {SEARCH_LISTING} from "../../query/listing";
import {CardItem} from "../card-item/Card-item";
import {Fade} from "react-reveal";
import ListDetail from "../listing-details/Listing-detail.component";
import {Modal} from "../shared/custom-modal";

export function Home() {
    const[searchInput, setSearchInput] = React.useState({
        city:"",
        country:""
    });
    const [getListings, {data, loading}] = useLazyQuery(SEARCH_LISTING);
    const [visible, setVisible] = React.useState(false);
    const [selectedListing, setSelectedListing] = React.useState({});


    const closeModal = () => {
        setVisible(false);
    };
    const handleClick = (data) => {

        setVisible(true);
        setSelectedListing(data);

    };
    function handleSearch(evt) {
        evt.preventDefault();

        getListings({variables:{searchListingInput: searchInput}})
    }
    if(data){
        console.log(data);
    }
    const[showModal, setShowModal] = React.useState(false);


    return(
        <Container>


            <Modal close={()=>setShowModal(false)} show={showModal}>
                <ListDetail closeModal={closeModal} showModal={visible} data={selectedListing}/>
            </Modal>


            <SearchContainer><Search searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch}/></SearchContainer>
            <RightSideBar>

                {loading?<Loading/>:<></>}
                {data && data.searchListing?<>


                    {data.searchListing.map((datum)=><Fade left><CardItem handleClick={(data) =>{handleClick(data);setShowModal(true);}} key={datum.id} {...datum}
                                                                                   /></Fade>)}
                </>:<></>}
            </RightSideBar>

        </Container>
    );
}
