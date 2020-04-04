import React from 'react';
import {CardItem} from "../card-item/Card-item";
import ListDetail from "../listing-details/Listing-detail.component";
import {useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";
import Loading from "../shared/Loading.component";
import {Fade} from "react-reveal";


export function Explore(props) {



    const getUsers = gql`
    {
        listings{
            id
            name
            city
            country
            price
            createdAt
            geolocations{
              lat
              long
            }
            personCapacity
            houseType
            bedrooms
            bedrooms
            rating
            reviews{
              id
              content
            }
            images{
              url
            }
            anemitys{
              name
            }
        }
    }
`;

    const [visible, setVisible] = React.useState(false);
    const [selectedListing, setSelectedListing] = React.useState({});

    const handleClick = (data) =>{

        setVisible(true);
        setSelectedListing(data);

    };
    const closeModal = () =>{
        setVisible(false);
    };

    const {loading, error, data} = useQuery(getUsers);

    if (loading) {

        return (
            <Fade left>
                <Loading/>
            </Fade>
        );
    }
    if (error) {
        console.log(error);
    }
    const book = (listing) => {
        console.log(listing);
    };
    console.log(data);
    return (

            <div className={"container"}>

                <ListDetail closeModal={closeModal} showModal={visible} data={selectedListing}/>
                <div className={"row p-3 h-50"}
                     style={{overflowY: "hidden", borderRadius: "2px"}}>
                    {data.listings.map(datum => <Fade left><CardItem handleClick={handleClick} key={datum.id} {...datum} book={book}/></Fade>)}
                </div>
            </div>
    );
}
