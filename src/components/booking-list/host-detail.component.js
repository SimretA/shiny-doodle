import React from 'react';
import Loading from "../shared/Loading.component";

export function HostDetail(props) {

    console.log(props);

    return <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <div>
            {`Host: ${props.user.firstName} ${props.user.lastName}`}
        </div>
        <div style={{textTransform:"none"}}>
            {`Email: ${props.user.email}`}
        </div>
        <div>
            {`Phone: ${props.user.phone}`}
        </div>
    </div>
}
