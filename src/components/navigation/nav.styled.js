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
    margin-left: 30px;
    padding-top: 30px;
    list-style: none;
    color: #FFFFFF !important;
    :hover{
        border-radius:5px;
        border-bottom: solid 5px #fff; 
        color: #000000 !important   ; 
        text-decoration: none;
    }
    cursor: pointer;
    

    
`;
export const AppName = Styled.p`
    padding: 10px;
    font-weight: bold;
    font-size: 19px;
`;
