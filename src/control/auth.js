

export const login = (history, location) =>{


    let { from } = location.state || { from: { pathname: "/" } };



    history.replace(from);

};

export const logout = (history, from) =>{
    history.push("/login");

    // if(from){
    //     history.replace
    // }
};
