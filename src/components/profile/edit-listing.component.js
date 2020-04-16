import React from 'react';
import Styled from 'styled-components';
import {Button, Label, TextInput} from "../shared/FormComponents";
import {useMutation} from "@apollo/react-hooks";
import {EDIT_LISTING} from "../../query/listing";
import {Fade} from "react-reveal";
import Loading from "../shared/Loading.component";
import {useHistory} from "react-router-dom";
import {logout} from "../../control/auth";

const Wrapper = Styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media screen and (min-width: 640px){
        flex-direction: row;
    } 
`;
const Column = Styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    margin: 50px;
    
   
`;


const InlineContainer = Styled.div`

    margin: 10px;
    display:flex;
    flex-direction: column;
    
    @media screen and (min-width: 640px){
        flex-direction: row;
    } 
   
`;


export function EditListing(props) {

    const [listing, setListing] = React.useState(null);
    React.useEffect(() => {
        const {id, name, personCapacity, city, country, price, houseType, status} = props.selectedListing;

        console.log(props.selectedListing);
        setListing({
            id,
            name,
            personCapacity,
            city,
            country,
            price,
            houseType,
            status

        })

    }, [props.selectedListing]);

    const [editListing, editedListing] = useMutation(EDIT_LISTING);

    const handleSnooze = () => {

        let stat = listing.status === "active" ? "snoozed" : "active";
        setListing({...listing, status: stat});
        handleSave();

    };
    let history = useHistory();

    const handleDelete = () => {


    };
    const handleSave = () => {

        editListing({variables: {updatedListing: listing}}).catch(e => {
            // history.push("/login");

            console.log(e);
            logout(history);
        });

    };

    if (editedListing.loading) {
        return (
            <Fade left>
                <Loading/>
            </Fade>
        );
    }
    if (editedListing.data) {
        console.log(editedListing.data);

    }
    return <>{listing ?
        <Wrapper>

            <Button onClick={handleSnooze}>{listing.status === "active" ? "Snooze" : "Activate"}</Button>
            <Column>
                <InlineContainer>
                    <TextInput value={listing.name}
                               onChange={(event) => setListing({...listing, name: event.target.value})}/>
                </InlineContainer>
                <InlineContainer>
                    <Label>Price</Label>
                    <TextInput type={'number'} value={listing.price}
                               onChange={(event) => setListing({...listing, price: event.target.value})}/>
                </InlineContainer>
                <InlineContainer>
                    <Label>Guests</Label>
                    <TextInput type={'number'} value={listing.personCapacity}
                               onChange={(event) => setListing({...listing, personCapacity: event.target.value})}/>
                </InlineContainer>

            </Column>
            <Column>
                <InlineContainer>
                    <TextInput value={listing.city}
                               onChange={(event) => setListing({...listing, city: event.target.value})}/>
                </InlineContainer>

                <InlineContainer>
                    <TextInput value={listing.country}
                               onChange={(event) => setListing({...listing, country: event.target.value})}/>
                </InlineContainer>
                <InlineContainer style={{justifyContent: "space-evenly"}}>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleDelete} style={{backgroundColor: "red", color: "white"}}>Delete</Button>
                </InlineContainer>

            </Column>

        </Wrapper> :
        <></>
             }
    </>

}
