import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import Avatar from 'react-avatar';
import {InlineWrapper, ProfileWrapper, Caption, Text, Wrapper, ListingsWrapper, CenterWrapper} from "./profile.styled";

export default function Profile(props) {

    const [auth, setAuth] = useContext(AuthContext);

    const {
        id,
        firstName,
        lastName,
        email,
        country,
        street,
        phone,
        language,
        joinedDate
    } = auth.account;

    return (
        <Wrapper>
            <ProfileWrapper>
                <InlineWrapper>
                    <Avatar  color={"#FFFF00"} round={true}
                            name={`${firstName} ${lastName}`}/>
                    <Text style={{marginTop:"auto"}} >{`${firstName} ${lastName}`}</Text>

                </InlineWrapper>
                <InlineWrapper>
                    <Caption> email </Caption>
                    <Text style={{textTransform: "none"}}>{email}</Text>
                </InlineWrapper>
                <InlineWrapper>
                    <Caption>Phone</Caption>
                    <Text>{phone}</Text>
                </InlineWrapper>
                <InlineWrapper>
                    <Caption>language</Caption>
                    <Text>{language}</Text>
                </InlineWrapper>
                <InlineWrapper>
                    <Caption>Joined in</Caption>
                    <Text>{new Date(joinedDate).getFullYear()}</Text>
                </InlineWrapper>
                <InlineWrapper>
                    <Text>{street}</Text>
                    <Text>{country}</Text>

                </InlineWrapper>

            </ProfileWrapper>
            <ListingsWrapper>
                <h1>Your listings go here</h1>
            </ListingsWrapper>
        </Wrapper>
    )
}
