import Styled from "styled-components";

export const SearchContainer=Styled.div`
    flex: 1;
    
`;

export const InputContainer= Styled.div`
    display: flex;
    flex-direction: column;
    margin-top: calc(0.375rem + 2px);
    
    @media screen and (min-width: 640px){
            flex-direction: row;
    } 
`;

export const GridContainer = Styled.div`
    z-index:-10;
    flex: 1;
    display: none;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 1fr);
    transform: rotate(45deg);
    row-gap: 3px;
    column-gap: 2px;
    @media screen and (min-width: 640px){
        display: grid;
    } 
`;
export const GridItem = Styled.div`
    background-color: #ffc107;
    border: 7px black solid;
    border-radius: 3px;
    color: #fff;
    padding: 1rem;
`;

