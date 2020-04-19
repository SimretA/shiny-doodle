import styled from "styled-components";
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 640px){
        flex-direction: row;
        margin:70px;
    } 
    
`;

export const Second = styled.p`
    color: #424000;
    font-size: 24px;
    font-weight: 500;
`;


export const InputContainer= styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 640px){
        flex-direction: row;
    } 
    margin-top: calc(0.375rem + 2px);
`;

export const SVG = styled.svg`
    height:90%;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 50%;
    z-index:-1;
    
`;

export const FormContainer = styled.form`
    background-color: #f9d976ae  !important;
    box-shadow: 3px 5px #e2cd8d86 ;
    border-radius: 10px;
    padding: calc(0.375rem + 3px);
    @media screen and (min-width: 640px){
        width: 50%;
    } 
`;
