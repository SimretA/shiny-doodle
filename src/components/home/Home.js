import  React from 'react';
import Search from "./../search/Search";
import Loading from "../shared/Loading.component";
import {Container, SearchContainer, RightSideBar} from "./home.styled";
import {useLazyQuery} from "@apollo/react-hooks";
import {SEARCH_LISTING} from "../../query/listing";
import {CardItem} from "../card-item/Card-item";
import ListDetail from "../listing-details/Listing-detail.component";
import {Modal} from "../shared/custom-modal";

export function Home() {
    const[searchInput, setSearchInput] = React.useState({
        city:"",
        country:""
    });


    const [expand, setExpand] = React.useState(true); //to expand the search fields
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

    const[showModal, setShowModal] = React.useState(false);

    React.useEffect(()=>{
        if(data && data.searchListing && data.searchListing.length>0){
            setExpand(false); //give room to incoming listings
        }
        else{
            setExpand(true);
        }

    },[data]);

    return(
        <Container>


            <Modal close={()=>setShowModal(false)} show={showModal}>
                <ListDetail closeModal={closeModal} showModal={visible} data={selectedListing}/>
            </Modal>


            <SearchContainer><Search expand={expand} setExpand={setExpand} searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch}/></SearchContainer>
            <RightSideBar>

                {loading?<Loading/>:<></>}
                {data && data.searchListing?<>


                    {data.searchListing.map((datum)=><CardItem handleClick={(data) =>{handleClick(data);setShowModal(true);}} key={datum.id} {...datum}
                                                                                   />)}
                </>:<></>}
                {
                    data && data.searchListing && data.searchListing.length===0?<div style={{margin:"auto"}}> Opps, No listing found :(</div>:""
                }
            </RightSideBar>

        </Container>
    );
}
