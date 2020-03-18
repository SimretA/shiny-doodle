import React from "react";


export default function Success(props) {

    return(
        <div>
            <h1>{props.message||"Successfully finished task"}</h1>
        </div>
    )

}
