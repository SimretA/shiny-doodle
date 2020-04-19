import Styled from 'styled-components';

export const Wrapper = Styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;  
    flex-direction: column;
    flex-wrap:wrap;
    @media screen and (min-width: 640px){
        flex-direction: row;
        height: 85vh;
        overflow-y: scroll;
    } 
    
    
`;
