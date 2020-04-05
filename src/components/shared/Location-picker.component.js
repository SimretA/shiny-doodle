import React, { useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faMapPin, faMoneyBill, faPeopleCarry} from '@fortawesome/free-solid-svg-icons'

function CustomMap({loc, handleMark}) {
    const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2ltcmV0YXJheWEiLCJhIjoiY2s3d2hrNWEyMDIzYTNlbXAwb3YyZTQ2NyJ9.xF2PkDYzuGTk2vwka4Cerw';

    const [viewport, setViewport] = useState({
        width: 400,
        height: 200,
        latitude: 	9.005401,
        longitude: 38.763611,
        zoom: 10
    });



    return (
        <Map
            {...viewport}
            onViewportChange={setViewport}
            onClick={handleMark}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        >
            {loc[0].lat && loc[0].long &&
            <Marker
                latitude={loc[0].lat}
                longitude={loc[0].long}
            >
                <FontAwesomeIcon icon={faMapPin}
                                 style={{
                                     fontSize: 25,
                                     marginRight: 5,
                                     color:"yellow"
                                 }}/>
            </Marker>}

        </Map>
    );
}
export default CustomMap;
