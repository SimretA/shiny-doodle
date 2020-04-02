import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import{gql} from "apollo-boost";
import {SearchContainer} from "./search.styled";
import {TextInput} from "../shared/FormComponents";

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

    return(<SearchContainer>
            <TextInput/>
        </SearchContainer>

    );

}
