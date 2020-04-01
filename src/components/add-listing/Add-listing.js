import React, {useEffect, useState} from 'react';
import Loading from "../shared/Loading.component";
import {Button, FormContainer} from "../login/login.styled";
import Map from "./Location-picker.component";
import {Listing} from "./../../types/listing";
import { useMutation } from '@apollo/react-hooks';
import{gql} from "apollo-boost";
import Success from "../shared/Success.component";
import * as filestack from 'filestack-js';

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

    useEffect(()=>{
        console.log("added");
        console.log(addedListing);
    },[addedListing]);
    const [stage, setStage] = useState(3);
    const [loading, setLoading] = useState(false);
    const [newListing, setNewListing] = useState(
            { name:"",
                price:90.0,
                street:"yo street",
                city:"yo city",
                country: "yo country",
                bedrooms:1,
                bathrooms:1,
                personCapacity:1,
                houseType: "vila",
                rating:0.0,}
            );

    const stage1 = (<div>
        <div className="form-group row py-2 mx-auto">
            <label htmlFor="title" className={"col-sm-2 col-form-label "}>Title</label>
            <input type="text" className="form-control col-sm-8" id="title"
                   placeholder="What is the listing's title?" onChange={evt => {
                setNewListing({...newListing, name: evt.target.value})
            }}/>

        </div>
        <div className="form-group row py-2 mx-auto">
            <label htmlFor="price" className={"col-sm-2 col-form-label "}>Price</label>
            <input type="number" className="form-control col-sm-2" id="price"
                   placeholder="price per night" onChange={evt => {
                setNewListing({...newListing, price: parseFloat(evt.target.value)})
            }}/>
            <label htmlFor="street" className={"col-sm-2 col-form-label "}>Street</label>
            <input type="text" className="form-control col-sm-4" id="street"
                   placeholder="Street name" onChange={evt => {
                setNewListing({...newListing, street: evt.target.value})
            }}/>

        </div>
        <div className="form-group row py-2 mx-auto">
            <label htmlFor="city" className={"col-sm-2 col-form-label "}>City</label>
            <input type="text" className="form-control col-sm-3" id="price"
                   placeholder="City" onChange={evt => {
                setNewListing({...newListing, city: evt.target.value})
            }}/>
            <label htmlFor="country" className={"col-sm-2 col-form-label "}>Country</label>
            <input type="text" className="form-control col-sm-3" id="country"
                   placeholder="Country" onChange={evt => {
                setNewListing({...newListing, country: evt.target.value})
            }}/>

        </div>
    </div>);
    const stage2 = <div>

        <div className="form-group row py-2 mx-auto">
            <label htmlFor="bedrooms" className={"col-sm-2 col-form-label "}>BedRooms</label>
            <input type="number" value={1} className="form-control col-sm-3" id="bedrooms"
                   onChange={evt => {
                       setNewListing({...newListing, bedrooms: parseInt(evt.target.value)})
                   }}/>
            <label htmlFor="bathrooms" className={"col-sm-2 col-form-label "}>BathRooms</label>
            <input type="text" className="form-control col-sm-3" id="bathrooms"
                   value={1} onChange={evt => {
                setNewListing({...newListing, bathrooms: parseInt(evt.target.value)})
            }}/>

        </div>
        <div className="form-group row py-2 mx-auto">
            <label htmlFor="personcapacity" className={"col-sm-2 col-form-label "}>Capacity</label>
            <input type="number" className="form-control col-sm-3" id="personcapacity"
                   value={1} onChange={evt => {
                setNewListing({...newListing, personCapacity: parseInt(evt.target.value)})
            }}/>
            <label htmlFor="country" className={"col-sm-2 col-form-label "}>House Type</label>
            <select className="custom-select col-sm-3" id="inputGroupSelect04" onChange={evt => {
                setNewListing({...newListing, houseType: evt.target.value })
            }}>
                <option value="1">Apartment</option>
                <option value="2">House</option>
                <option value="3">Three</option>
            </select>

        </div>
        <div className="form-group row py-2 mx-auto">
            <label htmlFor="location" className={"col-sm-2 col-form-label "}>Pick your location</label>
            <Map/>
        </div>
    </div>;


    const stage3 = <div>
        <div className="form-check">
            <label htmlFor="bedrooms" className={"col-sm-2 col-form-label "}>Anemities</label>
            <div>
                {/*<input className="form-check-input" type="checkbox" value="WiFi" id="wificheck" onChange={(evt)=>alert(evt.target.value)}/>*/}
                <label className="form-check-label" htmlFor="wificheck">
                    WiFi
                </label>
            </div>
            <div>
                <input className="form-check-input" type="checkbox" value="WiFi" id="wificheck"/>
                <label className="form-check-label" htmlFor="wificheck">
                    WiFi
                </label>
            </div>
            <div>
                <input className="form-check-input" type="checkbox" value="WiFi" id="wificheck"/>
                <label className="form-check-label" htmlFor="wificheck">
                    WiFi
                </label>
            </div>
        </div>
        <div>
            <button onClick={evt => handleUpload(evt)}>Upload</button>


        </div>

    </div>;

    useEffect(() => {
        console.log(newListing)
    }, [newListing]);

    const handleAdd=(event)=>{
        event.preventDefault();
        if (stage < 3)
            setStage(stage + 1);
        else{


            console.log("submitting");
            addListing({ variables: { newListing: newListing } });
        }
    };
    const content = (isLoading) => {
        if (isLoading) {
            return <Loading/>
        }
        if(addedListing.data){
            return<Success message={"Listing has been added."}/>
        }
        else {
            const cont = stage === 1 ? stage1 : stage === 2 ? stage2 : stage3;
            return (
                <FormContainer>
                    <h1>Stage {stage}</h1>
                    <form>
                        {cont}
                        <Button className={"px-4 py-1 btn"} onClick={event => {
                            handleAdd(event)
                        }}>{stage<3?"Next":"Add"}
                        </Button>
                    </form>
                </FormContainer>
            );
        }
    };
    return (
        <div className={"w-75 m-auto"}>

            {content(addedListing.loading)}

        </div>
    );
}
