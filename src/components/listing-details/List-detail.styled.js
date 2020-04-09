import styled from "styled-components";

export const MapContainer = styled.div`
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: start;
`;

export const Wrapper = styled.div`
      width: 95%;
      background-color: #00000000;
      border-radius: 10px;
      padding: 10px;
      color: #000;
      flex-direction: column;
      justify-content: space-evenly;
      @media screen and (min-width: 640px){
        flex-direction: row;
    } 

 `;
export const ImageContaier = styled.div`
    display: flex:
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
export const Data = styled.h3`
    text-transform:capitalize;
    display:inline;
    
`;

export const InlineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Column = styled.div`
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: start;
`;

export const StickyColumn = styled.div`
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: start;
        position: fixed;
        top: 120px;
        right:0;
        border: 1px solid gray;
        padding: 20px;
        background-color: #FFFFFFae;
`;




