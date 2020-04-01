import  React from 'react';
import "./home.css";
import Search from "./../search/Search";
import Loading from "../shared/Loading.component";

export function Home() {
    return(
        <div>


            {/*<Loading/>*/}
            <div className={"search"}><Search /></div>

        </div>
    );
}
