import styled from "styled-components";
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
export const Data = styled.p`
    text-transform:capitalize;
    display:inline;
    
`;

export const InlineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Column = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
`;




