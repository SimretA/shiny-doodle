import React from "react";


export default function Success(props) {

    return(
        <div>
            <h4>{props.message||"Successfully finished task"}</h4>
        </div>
    )

}
