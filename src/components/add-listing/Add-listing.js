import React, {useEffect, useState} from 'react';
import Loading from "../shared/Loading.component";
import {Button, FormContainer} from "../login/login.styled";
import Map from "./Location-picker.component";

export function AddListing(props) {

    /*type Listing {
        id: String
        name: String
        price: Float
        street: String
        city: String
        country: String
        bedrooms: Int
        bathrooms: Int
        personCapacity: Int
        houseType: String
        rating: Float
        reviews: [Review]
        images: [Image]
        geolocations: [Geolocation]
        anemitys: [Anemity]
        createdAt: Date
    }*/
    const [stage, setStage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const stage1 = (<div>
        <div className="form-group row py-2 mx-auto">
            <label htmlFor="title" className={"col-sm-2 col-form-label "}>Title</label>
            <input type="text" className="form-control col-sm-8" id="title"
                   placeholder="What is the listing's title?" onChange={evt => {
                setData({...data, title: evt.target.value})
            }}/>

        </div>
        <div className="form-group row py-2 mx-auto">
            <label htmlFor="price" className={"col-sm-2 col-form-label "}>Price</label>
            <input type="number" className="form-control col-sm-2" id="price"
                   placeholder="price per night" onChange={evt => {
                setData({...data, price: evt.target.value})
            }}/>
            <label htmlFor="street" className={"col-sm-2 col-form-label "}>Street</label>
            <input type="text" className="form-control col-sm-4" id="street"
                   placeholder="Street name" onChange={evt => {
                setData({...data, street: evt.target.value})
            }}/>

        </div>
        <div className="form-group row py-2 mx-auto">
            <label htmlFor="city" className={"col-sm-2 col-form-label "}>City</label>
            <input type="text" className="form-control col-sm-3" id="price"
                   placeholder="City" onChange={evt => {
                setData({...data, city: evt.target.value})
            }}/>
            <label htmlFor="country" className={"col-sm-2 col-form-label "}>Country</label>
            <input type="text" className="form-control col-sm-3" id="country"
                   placeholder="Country" onChange={evt => {
                setData({...data, country: evt.target.value})
            }}/>

        </div>
    </div>);
    const stage2 = <div>

        <div className="form-group row py-2 mx-auto">
            <label htmlFor="bedrooms" className={"col-sm-2 col-form-label "}>BedRooms</label>
            <input type="number" value={1} className="form-control col-sm-3" id="bedrooms"
                   onChange={evt => {
                       setData({...data, bedrooms: evt.target.value})
                   }}/>
            <label htmlFor="bathrooms" className={"col-sm-2 col-form-label "}>BathRooms</label>
            <input type="text" className="form-control col-sm-3" id="bathrooms"
                   value={1} onChange={evt => {
                setData({...data, bathrooms: evt.target.value})
            }}/>

        </div>
        <div className="form-group row py-2 mx-auto">
            <label htmlFor="personcapacity" className={"col-sm-2 col-form-label "}>Capacity</label>
            <input type="number" className="form-control col-sm-3" id="personcapacity"
                   value={1} onChange={evt => {
                setData({...data, personCapacity: evt.target.value})
            }}/>
            <label htmlFor="country" className={"col-sm-2 col-form-label "}>House Type</label>
            <select className="custom-select col-sm-3" id="inputGroupSelect04" onChange={evt => {
                setData({...data, personCapacity: evt.target.value})
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
    const stage3 = <div>Stage 3</div>;

    useEffect(() => {
        console.log(data)
    }, [data]);
    const content = (isLoading) => {
        if (isLoading) {
            return <Loading/>
        }
        else {
            const cont = stage === 1 ? stage1 : stage === 2 ? stage2 : stage3;
            return (
                <FormContainer>
                    <h1>Stage {stage}</h1>
                    <form>
                        {cont}
                        <Button className={"px-4 py-1 btn"} onClick={event => {
                            event.preventDefault();
                            if (stage < 3)
                                setStage(stage + 1);
                        }}>Next
                        </Button>
                    </form>
                </FormContainer>
            );
        }
    };
    return (
        <div className={"w-75 m-auto"}>

            {content(loading)}

        </div>
    );
}
