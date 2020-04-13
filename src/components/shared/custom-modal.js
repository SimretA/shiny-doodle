import React from 'react';
import Styled from 'styled-components';

const ModalContainer = Styled.div`
      position: fixed; 
      z-index: 1; 
      padding-top: 50px; 
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%; 
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

const Content = Styled.div`
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
`;

const Close = Styled.div`
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      :hover{
          color: #000;
          cursor: pointer;
      }
`;

export function Modal(props) {



    return<ModalContainer style={{display:props.show?'block':'none'}} >

        <Content>
            <Close onClick={props.close}>&times;</Close>

            {props.children}</Content>
    </ModalContainer>;
}
