import Styled from "styled-components";

export const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 640px){
            margin:20px;
        } 

`;

export const InputContainer= Styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 640px){
        flex-direction: row;
    } 
    margin-top: calc(0.375rem + 2px);
`;


export const Column = Styled.div`
    flex: 1;
    padding: calc(0.375rem + 2px);
    
`;

export const FormContainer = Styled.form`
    background-color: #f9d976ae  !important;
    display: flex;
    border-radius: 10px;
    padding: calc(0.375rem + 3px);
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 640px){
        flex-direction: row;
    } 
    
`;
