import  React from 'react';
import "./home.css";
import Search from "./../search/Search";
import Loading from "../shared/Loading.component";
import {Container, SearchContainer, RightSideBar} from "./home.styled";

export function Home() {
    return(
        <Container>


            {/*<Loading/>*/}
            <SearchContainer><Search /></SearchContainer>
            <RightSideBar>
                Whatever goes here goes here.
            </RightSideBar>

        </Container>
    );
}
