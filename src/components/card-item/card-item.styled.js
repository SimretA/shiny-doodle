import Styled from 'styled-components';

export const Wrapper = Styled.div`
    border: 1px solid yellow;
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    :hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);      
        margin-bottom: 30px;
        margin-top: 5px;

   }
`;


export const StatusTag = Styled.div`
    position: relative;
    left: 10px;
    top: 20px;
    height: 30px;
    padding: 5px 0px;
    width: 100px;
    transform: rotate(90deg);
    background-color: yellow;

    
    
`;
