import React,{useState} from "react";

export const AuthContext = React.createContext();

export const AuthProvider= (props) =>{


    const[auth, setAuth] = useState({
        isAuthed: true,
        account: {
            "id": "75de1f68-cf9c-4dd0-82bd-535643faf0eb",
            "firstName": "aymenjj",
            "lastName": "jelal",
            "email": "aymn3jelal@gmail.com",
            "country": "eth",
            "street": "saris",
            "phone": "09090909",
            "language": "eng",
            "joinedDate": 1584370680719
        }
    });

    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    );
};
