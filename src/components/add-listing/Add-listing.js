import React, {useContext, useEffect, useState} from 'react';
import Loading from "../shared/Loading.component";
import Map from "../shared/Location-picker.component";
import {useMutation} from '@apollo/react-hooks';
import Success from "../shared/Success.component";
import ReactFilestack from 'filestack-react';
// import * as filestack from 'filestack-js';
import {Button, Label, TextInput, DropDown} from "../shared/FormComponents";
import {Wrapper, Second, FormContainer, InputContainer} from "./../login/login.styled";
import {AuthContext} from "../../context/AuthContext";
import {Tag} from "../shared/Tag";
import {ADD_LISTING_2} from "./../../query/listing";
import {logout} from "../../control/auth";
import {useHistory} from "react-router-dom";

export function AddListing(props) {

    const [auth, setAuth] = useContext(AuthContext);


    let history = useHistory();
    function handleUpload(res) {

        if (res.filesUploaded.length > 0) {
            setNewListing({...newListing, images: [...newListing.images, {url: res.filesUploaded[0].url}]})
        }


    }

    const _onClickMap = (evt) => {
        setNewListing({...newListing, geolocations: [{long: evt.lngLat[0], lat: evt.lngLat[1]}]});


    };

    const [addListing, addedListing] = useMutation(ADD_LISTING_2);

    useEffect(() => {
        console.log("added");
        console.log(addedListing);
    }, [addedListing]);
    const [stage, setStage] = useState(1);
    const [warn, setWarn] = useState(false);
    const [newListing, setNewListing] = useState(
        {
            name: "",
            price: 0.0,
            street: "",
            city: "",
            country: "",
            bedrooms: 1,
            bathrooms: 1,
            personCapacity: 1,
            houseType: "apartment",
            rating: 0.0,
            geolocations: [{
                lat: null,
                long: null
            }],
            user: {
                id: auth.account.id
            },
            anemitys: [],
            images: []
        }
    );

    const stage1 = (
        <>
            <InputContainer>
                <Label htmlFor="title">Title</Label>
                <TextInput type="text" id="title"
                           placeholder="What is the listing's title?" value={newListing.name} onChange={evt => {
                    setNewListing({...newListing, name: evt.target.value})
                }}/>

            </InputContainer>
            <InputContainer>
                <Label htmlFor="price">Price</Label>
                <TextInput type="number" id="price" value={newListing.price}
                           placeholder="price per night" onChange={evt => {
                    setNewListing({...newListing, price: parseFloat(evt.target.value)})
                }}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="street">Street</Label>
                <TextInput type="text" id="street" value={newListing.street}
                           placeholder="Street name" onChange={evt => {
                    setNewListing({...newListing, street: evt.target.value})
                }}/>

            </InputContainer>
            <InputContainer>
                <Label htmlFor="city">City</Label>
                <TextInput type="text" id="price" value={newListing.city}
                           placeholder="City" onChange={evt => {
                    setNewListing({...newListing, city: evt.target.value})
                }}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="country">Country</Label>
                <TextInput type="text" id="country" value={newListing.country}
                           placeholder="Country" onChange={evt => {
                    setNewListing({...newListing, country: evt.target.value})
                }}/>

            </InputContainer></>);
    const stage2 = <>

        <InputContainer>
            <Label htmlFor="bedrooms">BedRooms</Label>
            <TextInput type="number" value={newListing.bedrooms} id="bedrooms"
                       onChange={evt => {
                           setNewListing({...newListing, bedrooms: parseInt(evt.target.value)})
                       }}/>
        </InputContainer>
        <InputContainer>
            <Label htmlFor="bathrooms">BathRooms</Label>
            <TextInput type="text" id="bathrooms"
                       value={newListing.bathrooms} onChange={evt => {
                setNewListing({...newListing, bathrooms: parseInt(evt.target.value)})
            }}/>

        </InputContainer>
        <InputContainer>
            <Label htmlFor="personcapacity">Capacity</Label>
            <TextInput type="number" id="personcapacity"
                       value={newListing.personCapacity} onChange={evt => {
                setNewListing({...newListing, personCapacity: parseInt(evt.target.value)})
            }}/>
        </InputContainer>
        <InputContainer>
            <Label htmlFor="country">House Type</Label>
            <DropDown id="inputGroupSelect04" value={newListing.houseType} onChange={evt => {
                setNewListing({...newListing, houseType: evt.target.value})
            }}>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
            </DropDown>

        </InputContainer>
        <InputContainer>
            <Label htmlFor="location">Pick your location</Label>
            <Map loc={newListing.geolocations} handleMark={_onClickMap}/>
        </InputContainer>
    </>;


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setNewListing({...newListing, anemitys: [...newListing.anemitys, {name: event.target.value}]});
            event.target.value = "";
        }
    };


    const removeAnemity = (i) => {
        let array = newListing.anemitys;
        array.splice(i, 1);


        setNewListing({...newListing, anemitys: array});
    };

    const stage3 = <>
        <InputContainer>
            <Label htmlFor="anemities">Amenities</Label>

            <TextInput defaultValue={""} type={"text"} id={"anemties"} placeholder={"WiFi, AC, Kitchen, Parking etc"}
                       onKeyPress={handleKeyPress}/>

        </InputContainer>
        <InputContainer style={{justifyContent: "space-evenly", flexWrap: "wrap"}}>
            {newListing.anemitys.map((anemity, i) => <Tag text={anemity.name} key={i} index={i}
                                                          removeAnemity={() => removeAnemity(i)}/>)}

        </InputContainer>
        <InputContainer style={{justifyContent: "center", flexWrap: "wrap"}}>

            {/*<Button style={{flex:2}} onClick={evt => handleUpload(evt)}>Upload</Button>*/}
            <ReactFilestack
                customRender={({onPick}) => (
                    <div>
                        <Label>Pictures</Label>
                        <Button onClick={onPick}>Pick</Button>
                    </div>
                )}
                apikey={'AkTKUy8PSQOeuJgw6XCqaz'}
                onSuccess={(res) => handleUpload(res)}
            />

        </InputContainer>
        <InputContainer style={{justifyContent: "space-evenly", flexWrap: "wrap"}}>{newListing.images.map(img => <img
            style={{maxWidth: 200, maxHeight: 200}} src={img.url}/>)}</InputContainer>


    </>;



    const handleAdd = (event) => {
        event.preventDefault();
        if (stage === 1) {
            if (newListing.name.trim() === "" || newListing.street.trim() === "" ||
                newListing.city.trim() === "" || newListing.country.trim() === "" || Math.floor(newListing.price) <= 0) {
                setWarn(true);
            }
            else {
                setWarn(false);
                setStage(stage + 1);
            }
        }
        else if (stage === 2) {
            if (newListing.geolocations[0].lat === null || newListing.geolocations[0].long === null) {
                setWarn(true);
            }
            else {
                setStage(stage + 1);
                setWarn(false);
            }
        }
        else {
            if (newListing.images.length === 0) {
                setWarn(true);
            }

            else {
                console.log("submitting");
                setWarn(false);
                addListing({variables: {...newListing}})
                    .catch(e=>{
                            if(e.message=="GraphQL error: Unauthenticated!!"){
                                logout(history);
                            }
                        }
                    );
            }

        }
    };

    function handleBack(event) {
        event.preventDefault();
        setStage(stage - 1);
    }

    const content = (addedListing) => {
        if (addedListing.loading) {
            return <Loading/>
        }
        else if (addedListing.error) {
            return <h4>Something went wrong. try again please</h4>;
        }
        else if (addedListing.data) {
            return <Success message={"Listing has been added."}/>
        }
        else {
            const cont = stage === 1 ? stage1 : stage === 2 ? stage2 : stage3;
            return (
                <>

                    <FormContainer>
                        <Second>Stage {stage}</Second>
                        {warn ? <p style={{color: "red"}}>All Fields Are Required</p> : <></>}
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


            {content(addedListing)}

        </Wrapper>
    );
}
