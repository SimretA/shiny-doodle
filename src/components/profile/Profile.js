import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import Avatar from 'react-avatar';
import {InlineWrapper, ProfileWrapper, Caption, Text, Wrapper, ListingsWrapper, CenterWrapper} from "./profile.styled";
import {useQuery} from "@apollo/react-hooks";
import {GET_USER_BY_ID} from "../../query/auth";
import Loading from "../shared/Loading.component";

export default function Profile(props) {

    const [auth, setAuth] = useContext(AuthContext);
    const {data, loading, error} = useQuery(GET_USER_BY_ID,{variables:{id: auth.account.id}});

    // let {
    //     id,
    //     firstName,
    //     lastName,
    //     email,
    //     country,
    //     street,
    //     phone,
    //     language,
    //     joinedDate
    // } = auth.account;

    if(loading){
        return <Loading/>
    }
    if(error){
        console.log(error);
    }
    if(data){
        console.log(data);
        const{
            firstName,
            lastName,
            email,
            country,
            street,
            phone,
            language,
            joinedDate
        } = data.user;

        return (
            <Wrapper>
                <ProfileWrapper>
                    <CenterWrapper>
                        <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} round={true}
                                name={`${firstName} ${lastName}`}/>
                        <Text>{`${firstName} ${lastName}`}</Text>

                    </CenterWrapper>
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
};
