import React from 'react';

export default function ListDetail(props) {
    const show =props.showModal?'block':'none';
    console.log(props);
    return(
        <div style={{display:show}}>
            <h1>Yoooooooo</h1>
        </div>
    )
}
