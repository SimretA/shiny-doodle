import React from 'react';
import  Styled from 'styled-components';
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export  const Tag =(props)=>{
    const TagContainer = Styled.div`
        border: 2px yellow solid;
        border-radius: 5px;
        padding: .35rem;
        background-color: #eeeeeeae;
        font-size: 12px;
    `;
    return(
        <TagContainer >
            {props.text}
            <FontAwesomeIcon icon={faWindowClose}
                             style={{
                                 fontSize: 14,
                                 marginLeft: 5,
                                 color: "red"
                             }}
            onClick={props.removeAnemity}/>
        </TagContainer>
    );
};
