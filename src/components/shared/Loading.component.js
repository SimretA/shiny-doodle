import React from "react";
import Styled from "styled-components";
import "./loading.style.scss";

export default function Loading(props) {

    const LoadingContainer = Styled.div`
          position: relative;
          
          span{
              animation-name: example;
              animation-duration: 4s;
              animation-iteration-count: infinite;
              animation-direction: alternate-reverse; 
          }
          @keyframes example {
                  0%   {font-size:12}
                  25%  {font-size:15}
                  50%  {font-size:18}
                  75%  {font-size:22}
                  100% {font-size:24}
                } 
    
    `;

    const Dot = Styled.div`
        
    
    `;

    // return (
    //     <LoadingContainer>
    //         <h1>Loading<span>...</span></h1>
    //     </LoadingContainer>
    // );
    return (
        <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    );
}
