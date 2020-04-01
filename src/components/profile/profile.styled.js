import Styled from 'styled-components';


export const Wrapper = Styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;  
    flex-direction: column;
    @media screen and (min-width: 640px){
        flex-direction: row;
    } 
    


`;

export const ProfileWrapper = Styled.div`
    background-color: #faf976ae;
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 40px;
     
  

`;
export const ListingsWrapper = Styled.div`
    flex:2;
    display: flex;
    flex-direction: column;
    padding: 40px

`;
export const InlineWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    margin: 1%;
    justify-content: space-between;
`;
export const CenterWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 1%;
    justify-content: center ;
`;
export const Caption = Styled.p`
    text-transform: capitalize;
    font-weight: 600;
    flex:1;
    color: #808080
`;
export const Text = Styled.h5`
    flex:1;
    font-size:18px;
    text-transform: capitalize
`;

