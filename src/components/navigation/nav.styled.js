import Styled from "styled-components";

export const NavWrapper=Styled.div`
    background-color: #ffc107;
    width:100%;
    display: flex;
    flex-direction: column;
    color: #FFFFFF !important; 
    @media screen and (min-width: 640px){
        flex-direction: row;
    } 
    
`;

export const NavLink=Styled.li`
    padding: 10px;
    list-style: none;
    :hover{
        border-radius:5px;
        border-bottom: solid 5px #fff; 
        font-size: 17px;
        text-decoration: none;
    }
    cursor: pointer;
    margin-left: 10px;
    color: #FFFFFF !important;
    

    
`;
export const AppName = Styled.p`
    padding: 10px;
    font-weight: bold;
    font-size: 19px;
`;
