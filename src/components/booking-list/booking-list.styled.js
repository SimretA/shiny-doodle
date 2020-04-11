import Styled from 'styled-components';

export const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media screen and (min-width: 640px){
        flex-direction: row;
    } 
`;

export const ListWrapper = Styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 100vh;
    
`;
export const MapWrapper = Styled.div`
    flex:3;
    height: 100vh;

`;
