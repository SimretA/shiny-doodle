import React from "react";


export default function Success(props) {

    return (
        <div style={{margin:"100px"}}>
            <p style={{fontSize: "24px"}}>{props.message || "Successfully finished task"}</p>
        </div>
    )

}
