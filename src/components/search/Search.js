import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";
import {SearchContainer, InputContainer} from "./search.styled";
import {TextInput, Label, Button} from "../shared/FormComponents";

export default function Search() {
    const getUsers = gql`
    {
        users{
        id
        firstName
        }
    }
`;


    const {loading, error, data} = useQuery(getUsers);
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

    return (<SearchContainer>
            <h4 style={{fontStyle:"italic"}}>Where to next?</h4>
            <InputContainer>
                <Label>Where?</Label>
                <TextInput type="text"  placeholder="Pick a Place" />
            </InputContainer>
            <InputContainer>
                <Label>From:</Label>
                <TextInput type={"date"}/>
            </InputContainer>
            <InputContainer>
                <Label>Until:</Label>
                <TextInput type={"date"}/>
            </InputContainer>
            <InputContainer>
                <Label>Guests</Label>
                <TextInput type={"number"} value={1}/>
            </InputContainer>
            <Button onClick={(evt)=>handleSearch(evt)}>
                Search
            </Button>
        </SearchContainer>

    );

}
