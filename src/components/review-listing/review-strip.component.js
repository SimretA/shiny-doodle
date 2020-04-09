import React from 'react';
import Styled from 'styled-components';
import Avatar from "react-avatar";
import {CenterWrapper} from "../profile/profile.styled";

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding:10px;
    justify-content: center;
    text-align:justify;
    border-bottom: 1px solid gray;
    
`;

const InlineWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap:wrap;
    
`;


export default function ReviewStrip(props) {

    const{firstName, lastName} = props.data.user;

    return<Wrapper>
        <InlineWrapper>
        <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} round={true}
                name={`${firstName} ${lastName}`} size="40"/>
            <p style={{paddingLeft:"5"}}>{firstName} {lastName}</p>
        </InlineWrapper>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {/*<p>{props.data.content}</p>*/}


    </Wrapper>;
}
