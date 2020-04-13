import Styled from "styled-components";

export const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    overflow-x: hidden;
    overflow-y:hidden;
   

`;
export const SearchContainer = Styled.div`
    flex:1;
    padding: 5px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 640px){
        flex-direction: row;
    } 
    


`;
export const RightSideBar = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;

`;
