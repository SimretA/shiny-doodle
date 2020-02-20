import  React from 'react';
import "./home.css";

export function Home() {
    return(
        <div>
            <h1>HOME</h1>
            <span className={"span"}>
                <div className={"item"}></div>
                <div className={"item"}></div>
                <div className={"item"}><h1 className={"title"}>Hello World</h1></div>
                <div className={"item"}></div>
                <div className={"item"}>Hello World</div>
                <div className={"item"}></div>
                <div className={"item"}></div>
                <div className={"item"}></div>
            </span>
        </div>
    );
}