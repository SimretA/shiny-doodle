import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {Caption, CenterWrapper, InlineWrapper, Text} from "./profile.styled";
import Avatar from "react-avatar";

export default function (props) {


    return <>
        <FontAwesomeIcon icon={faEdit}
                         style={{
                             fontSize: 25,
                             color: "gray",
                             position: 'relative',
                             top: '20px',
                             right: '0px'
                         }}
                         onClick={() => setEditable(true)}
        />

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

    </>
}
