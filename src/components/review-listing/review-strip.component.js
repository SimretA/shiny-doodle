import React from 'react';
import Styled from 'styled-components';
import Avatar from "react-avatar";

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
         <p style={{margin:0}}>{props.data.content} {new Date(props.data.createdAt).toDateString()}</p>



    </Wrapper>;
}
