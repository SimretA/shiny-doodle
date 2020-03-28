import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";

export default function Profile(props) {

    const [auth, setAuth] = useContext(AuthContext);

    const {
        id,
        firstName,
        lastName,
        email,
        country,
        street,
        phone,
        language,
        joinedDate
    } = auth.account;

    return (
        <div>
            <h3>{`${firstName} ${lastName}`}</h3>
            <h3>{email}</h3>
            <h3>{country}</h3>
            <h3>{street}</h3>
            <h3>{phone}</h3>
            <h3>{language}</h3>
            <h3>{new Date(joinedDate).toDateString()}</h3>
        </div>
    )
}
