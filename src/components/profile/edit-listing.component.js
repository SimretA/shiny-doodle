import React, {useState} from 'react';
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
import {Tag} from "../shared/Tag";
import {InputContainer} from "../login/login.styled";

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
    const [controlledAnemity, setControlledAnemity] = useState("");

    React.useEffect(() => {
        const {id, name, personCapacity, city, street,
            images,
            country, price, houseType, bathrooms, bedrooms,
            status, anemitys} = props.selectedListing;

        setListing({
            id,
            name,
            price,
            street,
            city,
            country,
            personCapacity,
            bedrooms,
            houseType,
            status,
            images,
            anemitys: anemitys

        })

    }, [props]);

    const [editListing, editedListing] = useMutation(EDIT_LISTING);
    const [deleteListing, deletedListing] = useMutation(DELETE_LISTING);

    let history = useHistory();

    const handleDelete = () => {
        deleteListing({variables: {id: listing.id}}).catch(e => {
                if (e.message == "GraphQL error: Unauthenticated!!") {
                    logout(history);
                }
            }
        );


        props.close();

        setShowPrompt(false);


    };

    const handleSave = () => {

        editListing({variables: {...listing}}).catch(e => {
                if (e.message == "GraphQL error: Unauthenticated!!") {
                    logout(history);
                }
            }
        );

        props.refetch();
        props.close();

    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setListing({...listing, anemitys: [...listing.anemitys, {name: controlledAnemity}]});
            setControlledAnemity("");
        }
    };

    const removeAnemity = (i) => {
        let array = listing.anemitys;
        array.splice(i, 1);


        setListing({...listing, anemitys: array});
    };

    const handleSnooze = () => {

        let stat;
        if (listing.status == 'active') {
            stat = 'snoozed';
        }
        else {
            stat = 'active';
        }

        setListing({...listing, status: stat});


        // setTimeout(handleSave, 1000);

    };

    if (deletedListing.data) {
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
    if(editedListing.error){
        console.log(editedListing.error);
    }

    return <>
        <Prompt onYes={handleDelete} close={() => setShowPrompt(false)} show={showPrompt}
                onNo={() => setShowPrompt(false)}/>
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
                                   onChange={(event) => setListing({
                                       ...listing,
                                       price: parseFloat(event.target.value)
                                   })}/>
                    </InlineContainer>
                    <InlineContainer>
                        <Label>Guests</Label>
                        <TextInput type={'number'} value={listing.personCapacity}
                                   onChange={(event) => setListing({
                                       ...listing,
                                       personCapacity: parseInt(event.target.value)
                                   })}/>
                    </InlineContainer>
                    {/*<InputContainer>*/}
                        {/*<Label htmlFor="anemities">Amenities</Label>*/}

                        {/*<TextInput value={controlledAnemity}*/}
                                   {/*onChange={event => setControlledAnemity(event.target.value)} type={"text"}*/}
                                   {/*id={"anemties"} placeholder={"WiFi, AC, Kitchen, Parking etc"}*/}
                                   {/*onKeyPress={handleKeyPress}/>*/}

                    {/*</InputContainer>*/}
                    <InputContainer style={{justifyContent: "space-evenly", flexWrap: "wrap"}}>
                        {listing.anemitys && listing.anemitys.map((anemity, i) => <Tag text={anemity.name} key={i} index={i}
                                                                   removeAnemity={() => removeAnemity(i)}/>)}

                    </InputContainer>

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

                    <InlineContainer>
                        <p>Bedrooms</p>
                        <TextInput type={'number'} value={listing.bedrooms}
                                   onChange={(event) => setListing({
                                       ...listing,
                                       bedrooms: parseInt(event.target.value)
                                   })}/>
                        {/*<p>Bathrooms</p>*/}
                        {/*<TextInput type={'number'} value={listing.bathrooms}*/}
                                   {/*onChange={(event) => setListing({*/}
                                       {/*...listing,*/}
                                       {/*bathrooms: parseInt(event.target.value)*/}
                                   {/*})}/>*/}
                    </InlineContainer>
                    <InlineContainer style={{justifyContent: "space-evenly"}}>
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={() => setShowPrompt(true)}
                                style={{backgroundColor: "red", color: "white"}}>Delete</Button>
                    </InlineContainer>

                </Column>

            </Wrapper> :
            <></>
        }
    </>

}
