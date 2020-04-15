import Styled from 'styled-components';

export const Wrapper = Styled.div`
    border: 1px solid yellow;
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
   :hover{        
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
