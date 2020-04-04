import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { geolocated } from "react-geolocated";


function Map() {
    const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2ltcmV0YXJheWEiLCJhIjoiY2s3d2hrNWEyMDIzYTNlbXAwb3YyZTQ2NyJ9.xF2PkDYzuGTk2vwka4Cerw';

    const [viewport, setViewport] = useState({
        width: 400,
        height: 200,
        latitude: 	9.005401,
        longitude: 38.763611,
        zoom: 10
    });

    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        />
    );
}
export default Map;
