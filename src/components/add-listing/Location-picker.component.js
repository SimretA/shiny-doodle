import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { geolocated } from "react-geolocated";


function Map() {
    const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2ltcmV0YXJheWEiLCJhIjoiY2s3d2hrNWEyMDIzYTNlbXAwb3YyZTQ2NyJ9.xF2PkDYzuGTk2vwka4Cerw';

    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
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
