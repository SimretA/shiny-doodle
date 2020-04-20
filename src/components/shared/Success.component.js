import React from "react";


export default function Success(props) {

    return(
        <div>
            <h5>{props.message||"Successfully finished task"}</h5>
        </div>
    )

}
