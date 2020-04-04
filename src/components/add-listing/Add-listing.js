import React, {useEffect, useState} from 'react';
import Loading from "../shared/Loading.component";
import Map from "../shared/Location-picker.component";
import {useMutation} from '@apollo/react-hooks';
import {gql} from "apollo-boost";
import Success from "../shared/Success.component";
import * as filestack from 'filestack-js';
import {Button, Label, TextInput, DropDown} from "../shared/FormComponents";
import {Wrapper, Second,  FormContainer, InputContainer} from "./../login/login.styled";

export function AddListing(props) {


    const ADD_LISTING = gql`
  mutation addNewListing($newListing: NewListingInput!) {
    addNewListing(
        input: $newListing
        ){
            id
            name
            city
            country
        }
    
  }
`;
    const client = filestack.init('AkTKUy8PSQOeuJgw6XCqaz');

    function handleUpload(evt) {

        evt.preventDefault();
        client.picker().open();


    }

    const [addListing, addedListing] = useMutation(ADD_LISTING);

    useEffect(() => {
        console.log("added");
        console.log(addedListing);
    }, [addedListing]);
    const [stage, setStage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [newListing, setNewListing] = useState(
        {
            name: "",
            price: 90.0,
            street: "yo street",
            city: "yo city",
            country: "yo country",
            bedrooms: 1,
            bathrooms: 1,
            personCapacity: 1,
            houseType: "vila",
            rating: 0.0,
        }
    );

    const stage1 = (
        <>
            <InputContainer>
                <Label htmlFor="title">Title</Label>
                <TextInput type="text" id="title"
                           placeholder="What is the listing's title?" onChange={evt => {
                    setNewListing({...newListing, name: evt.target.value})
                }}/>

            </InputContainer>
            <InputContainer>
                <Label htmlFor="price">Price</Label>
                <TextInput type="number" id="price"
                           placeholder="price per night" onChange={evt => {
                    setNewListing({...newListing, price: parseFloat(evt.target.value)})
                }}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="street">Street</Label>
                <TextInput type="text" id="street"
                           placeholder="Street name" onChange={evt => {
                    setNewListing({...newListing, street: evt.target.value})
                }}/>

            </InputContainer>
            <InputContainer>
                <Label htmlFor="city">City</Label>
                <TextInput type="text" id="price"
                           placeholder="City" onChange={evt => {
                    setNewListing({...newListing, city: evt.target.value})
                }}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="country">Country</Label>
                <TextInput type="text" id="country"
                           placeholder="Country" onChange={evt => {
                    setNewListing({...newListing, country: evt.target.value})
                }}/>

            </InputContainer></>);
    const stage2 = <>

        <InputContainer>
            <Label htmlFor="bedrooms">BedRooms</Label>
            <TextInput type="number" value={1} id="bedrooms"
                       onChange={evt => {
                           setNewListing({...newListing, bedrooms: parseInt(evt.target.value)})
                       }}/>
        </InputContainer>
        <InputContainer>
            <Label htmlFor="bathrooms">BathRooms</Label>
            <TextInput type="text" id="bathrooms"
                       value={1} onChange={evt => {
                setNewListing({...newListing, bathrooms: parseInt(evt.target.value)})
            }}/>

        </InputContainer>
        <InputContainer>
            <Label htmlFor="personcapacity">Capacity</Label>
            <TextInput type="number" id="personcapacity"
                       value={1} onChange={evt => {
                setNewListing({...newListing, personCapacity: parseInt(evt.target.value)})
            }}/>
        </InputContainer>
        <InputContainer>
            <Label htmlFor="country">House Type</Label>
            <DropDown id="inputGroupSelect04" onChange={evt => {
                setNewListing({...newListing, houseType: evt.target.value})
            }}>
                <option value="1">Apartment</option>
                <option value="2">House</option>
                <option value="3">Three</option>
            </DropDown>

        </InputContainer>
        <InputContainer>
            <Label htmlFor="location">Pick your location</Label>
            <Map/>
        </InputContainer>
    </>;


    const stage3 = <>
        <InputContainer>
            <Label htmlFor="bedrooms">Anemities</Label>

            <>
                <TextInput type="checkbox" value="WiFi" id="wificheck"/>
                <Label htmlFor="wificheck">
                    WiFi
                </Label>
            </>
            <>
                <TextInput type="checkbox" value="WiFi" id="wificheck"/>
                <Label htmlFor="wificheck">
                    WiFi
                </Label>
            </>
        </InputContainer>
        <InputContainer>
            <Label>Pictures</Label>
            <Button onClick={evt => handleUpload(evt)}>Upload</Button>
        </InputContainer>
    </>;

    useEffect(() => {
        console.log(newListing)
    }, [newListing]);

    const handleAdd = (event) => {
        event.preventDefault();
        if (stage < 3)
            setStage(stage + 1);
        else {


            console.log("submitting");
            addListing({variables: {newListing: newListing}});
        }
    };

    function handleBack(event) {
        event.preventDefault();
        setStage(stage - 1);
    }

    const content = (isLoading) => {
        if (isLoading) {
            return <Loading/>
        }
        if (addedListing.data) {
            return <Success message={"Listing has been added."}/>
        }
        else {
            const cont = stage === 1 ? stage1 : stage === 2 ? stage2 : stage3;
            return (
                <>

                    <FormContainer>
                        <Second>Stage {stage}</Second>
                        {cont}
                        <InputContainer>
                            {
                                stage > 1 ? <Button onClick={event => {
                                    handleBack(event)
                                }}>
                                    Back
                                </Button> : <></>
                            }

                            <Button onClick={event => {
                                handleAdd(event)
                            }}>{stage < 3 ? "Next" : "Add"}
                            </Button>
                        </InputContainer>

                    </FormContainer>
                </>
            );
        }
    };
    return (
        <Wrapper>

            {content(addedListing.loading)}

        </Wrapper>
    );
}
