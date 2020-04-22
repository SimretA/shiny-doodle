import React from 'react';
import {SearchContainer, GridContainer, InputContainer, GridItem} from "./search.styled";
import {TextInput, Label, Button} from "../shared/FormComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCommentDots} from '@fortawesome/free-solid-svg-icons'

export default function Search({searchInput, setSearchInput,handleSearch, expand, setExpand}) {

    // const[searchInput, setSearchInput] = React.useState({});


    return (<>
        <SearchContainer>
            <FontAwesomeIcon icon={faCommentDots} style={{fontSize: 25, marginRight: 5}}/>
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
