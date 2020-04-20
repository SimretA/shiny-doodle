import React from 'react';
import {Button, TextInput} from "../shared/FormComponents";
import {Caption, InlineWrapper, Text} from "./profile.styled";
import {useMutation} from "@apollo/react-hooks";
import {EDIT_USER} from "../../query/auth";
import {Fade} from "react-reveal";
import Loading from "../shared/Loading.component";

export default function EditProfile(props) {

    let edited = false;

    const  {
        id,
        firstName,
        lastName,
        email,
        country,
        street,
        phone,
        language
    } = props.user;
    const [account, setAccount] = React.useState({
        id,
        firstName,
        lastName,
        email,
        country,
        street,
        phone,
        language
    });


    const [editUser, editedUser] = useMutation(EDIT_USER);

    const handleEdit = (evt) => {
        evt.preventDefault();

        editUser({variables: {newUser: account}});
    };

    if (editedUser.loading) {
        return (
            <Fade left>
                <Loading/>
            </Fade>
        );
    }
    if (editedUser.data) {
        //console.log(editedUser.data);
        edited = true;
        props.refetch && props.refetch();
        props.closeEditable && props.closeEditable();

    }


    return <>
        <Text>{!edited?`Edit Profile`:`Your profile has been updated`}</Text>
        <InlineWrapper>
            <TextInput style={{margin: 5}} value={account.firstName}
                       onChange={(event) => setAccount({...account, firstName: event.target.value})}/>
            <TextInput style={{margin: 5}} value={account.lastName}
                       onChange={(event) => setAccount({...account, lastName: event.target.value})}/>

        </InlineWrapper>
        <InlineWrapper>
            <Caption style={{margin: 5}}>email </Caption>
            <TextInput style={{margin: 5}} value={account.email}
                       onChange={(event) => setAccount({...account, email: event.target.value})}/>
        </InlineWrapper>
        <InlineWrapper>
            <Caption style={{margin: 5}}>Phone </Caption>
            <TextInput style={{margin: 5}} value={account.phone}
                       onChange={(event) => setAccount({...account, phone: event.target.value})}/>
        </InlineWrapper>
        <InlineWrapper>
            <Caption style={{margin: 5}}>Language </Caption>
            <TextInput style={{margin: 5}} value={account.language}
                       onChange={(event) => setAccount({...account, language: event.target.value})}/>
        </InlineWrapper>
        <InlineWrapper>
            <TextInput style={{margin: 5}} value={account.street}
                       onChange={(event) => setAccount({...account, street: event.target.value})}/>
            <TextInput style={{margin: 5}} value={account.country}
                       onChange={(event) => setAccount({...account, country: event.target.value})}/>

        </InlineWrapper>
        <Button onClick={handleEdit}>Save</Button>

    </>
}
