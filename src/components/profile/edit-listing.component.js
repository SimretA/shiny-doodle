import React from 'react';
import Styled from 'styled-components';
import {Button, Label, TextInput} from "../shared/FormComponents";
import {useMutation} from "@apollo/react-hooks";
import {DELETE_LISTING, EDIT_LISTING} from "../../query/listing";
import {Fade} from "react-reveal";
import Loading from "../shared/Loading.component";
import {useHistory} from "react-router-dom";
import {logout} from "../../control/auth";
import Success from "../shared/Success.component";
import {Prompt} from "../shared/Prompt.component";

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
    const [showPrompt, setShowPrompt] = React.useState(false);

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
    const [deleteListing, deletedListing] = useMutation(DELETE_LISTING);


    React.useEffect(()=>{listing && console.log("stat ", listing.status=='active')},[listing]);
    let history = useHistory();

    const handleDelete = () => {
        deleteListing({variables: {id: listing.id}}).catch(e=>{
                if(e.message=="GraphQL error: Unauthenticated!!"){
                    logout(history);
                }
            }
        );


        props.close();

        setShowPrompt(false);


    };

    const handleSave = () => {

        editListing({variables: {updatedListing: listing}}).catch(e=>{
                if(e.message=="GraphQL error: Unauthenticated!!"){
                    logout(history);
                }
            }
        );

        props.refetch();
        // props.close();

    };
    const handleSnooze = () => {

        let stat;
        if(listing.status == 'active'){
            stat = 'snoozed';
        }
        else{
            stat = 'active';
        }

        setListing({...listing, status: stat});


        // setTimeout(handleSave, 1000);

    };

    if(deletedListing.data){
        console.log("Deleted Listing", deletedListing.data);
        props.refetch();

    }

    if (editedListing.loading || deletedListing.loading) {
        return (
            <Fade left>
                <Loading/>
            </Fade>
        );
    }

    return <>
        <Prompt onYes={handleDelete} close={()=>setShowPrompt(false)} show={showPrompt} onNo={()=>setShowPrompt(false)}/>
        {listing ?
        <Wrapper>

            <Button onClick={handleSnooze}>{listing.status == 'active' ? "Snooze" : "Activate"}</Button>
            <Column>
                <InlineContainer>
                    <TextInput value={listing.name}
                               onChange={(event) => setListing({...listing, name: event.target.value})}/>
                </InlineContainer>
                <InlineContainer>
                    <Label>Price</Label>
                    <TextInput type={'number'} value={listing.price}
                               onChange={(event) => setListing({...listing, price: parseFloat(event.target.value)})}/>
                </InlineContainer>
                <InlineContainer>
                    <Label>Guests</Label>
                    <TextInput type={'number'} value={listing.personCapacity}
                               onChange={(event) => setListing({...listing, personCapacity:parseInt(event.target.value)})}/>
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
                    <Button onClick={()=>setShowPrompt(true)} style={{backgroundColor: "red", color: "white"}}>Delete</Button>
                </InlineContainer>

            </Column>

        </Wrapper> :
        <></>
             }
    </>

}
