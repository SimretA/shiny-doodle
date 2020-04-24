import React from "react";


export default function Success(props) {

    return (
        <div>
            <p style={{fontSize: "20px"}}>{props.message || "Successfully finished task"}</p>
        </div>
    )

}
