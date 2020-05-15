

export const emailValidation =(email) =>{


    return /.+@.+\.[A-Za-z]+$/.test(email);
};

export const passwordValidation = (password) =>{

    let passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return passRegex.test(password);
};


export const phoneValidation =(phone) =>{
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone.toString());
};
