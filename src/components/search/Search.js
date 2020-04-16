import React, {useEffect, useState} from 'react';
import {useLazyQuery, useQuery} from "@apollo/react-hooks";
import {SearchContainer, GridContainer, InputContainer, GridItem} from "./search.styled";
import {TextInput, Label, Button} from "../shared/FormComponents";
import {SEARCH_LISTING} from "../../query/listing";
import Loading from "../shared/Loading.component";
import {Modal} from "../shared/custom-modal";

export default function Search({searchInput, setSearchInput,handleSearch}) {

    // const[searchInput, setSearchInput] = React.useState({});


    return (<>
        <SearchContainer>
            <h4 style={{fontStyle:"italic"}}>Where to next?</h4>
            <InputContainer>
                <TextInput type="text"  placeholder="City" value={searchInput.city||""}
                           onChange={(event)=>{
                               setSearchInput({...searchInput, city:event.target.value});
                               handleSearch(event);
                           }}/>
                <TextInput type="text"  placeholder="Country" value={searchInput.country||""}
                           onChange={(event)=>{
                               setSearchInput({...searchInput, country:event.target.value});
                               handleSearch(event);
                           }}/>
            </InputContainer>
            <InputContainer>
                <Label>Guests</Label>
                <TextInput type={"number"} value={searchInput.personCapacity||""}
                           onChange={(event)=>{
                               setSearchInput({...searchInput, personCapacity:parseInt(event.target.value)});
                               handleSearch(event);
                           }}/>
            </InputContainer>
            <InputContainer>
                <Label>Price</Label>
                <TextInput type={"number"} value={searchInput.price||""}
                           onChange={(event)=>{
                               setSearchInput({...searchInput, price:parseFloat(event.target.value)});
                               handleSearch(event);
                           }}/>
            </InputContainer>
            <Button onClick={(evt)=>handleSearch(evt)}>
                Search
            </Button>

        </SearchContainer>
        <GridContainer>
            {[0,1,2,3,4,5,6,7,8,9].map(()=><GridItem/>)}
        </GridContainer>
        </>


    );

}
