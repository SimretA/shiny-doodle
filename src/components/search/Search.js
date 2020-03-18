import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import{gql} from "apollo-boost";

export default function  Search() {
    const getUsers= gql`
    {
        users{
        id
        firstName
        }
    }
`;


    const { loading, error, data } = useQuery(getUsers);
    useEffect(
        () => {

            console.log("yoo");
            console.log(data);
        }, [data]
    );

    function handleSearch(evt) {

        evt.preventDefault();
        alert("clicked");

    }

    return(
        <div >

            <h4 className={"font-italic"}>Book a place to crash and let the adventure begin</h4>
            <form>
                <div className={"row mt-3"}>
                    <div className="col">
                        <p>Where?</p>
                        <input type="text" className="form-control" placeholder="Pick a Place" />
                    </div>
                </div>
                <div className="row mt-3">

                    <div className="col">
                        <p>From:</p>
                        <input data-provide="datepicker" className={"form-control"} type={"date"} />
                    </div>
                    <div className="col">
                        <p>Until:</p>
                        <input data-provide="datepicker" className={"form-control"} type={"date"} />
                        {/*<input type="text" className="form-control" placeholder="Last name" />*/}
                    </div>

                </div>
                <div className={"row mt-3"}>

                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
                <button className={"btn btn-warning my-3 p-3"} onClick={(evt)=>handleSearch(evt)}>Search</button>
            </form>

        </div>
    );

}