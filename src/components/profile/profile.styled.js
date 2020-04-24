import Styled from 'styled-components';


export const Wrapper = Styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;  
    flex-direction: column;
    @media screen and (min-width: 640px){
        flex-direction: row;
        height: 85vh;
        
    } 
    


`;

export const ProfileWrapper = Styled.div`
    background-color: #faf976ae;
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    
     
  

`;
export const ListingsWrapper = Styled.div`
    flex:2;
    display: flex;
    flex-direction: row;
    padding: 10px;
    flex-wrap: wrap;
    justify-content:space-evenly;
    height: 80vh;
    overflow-y: scroll;
    

`;
export const InlineWrapper = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin: 0 10px;
`;

export const CenterWrapper = Styled.div`
    
    flex-direction: column;
    justify-content: center ;
`;
export const Caption = Styled.p`
    text-transform: capitalize;
    font-weight: 600;
    color: #808080;
    margin-left: .77rem;
`;
export const Text = Styled.p`
    margin-left: .57rem;
    text-transform: capitalize
`;

