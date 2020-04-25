

export const emailValidation =(email) =>{


    return /.+@.+\.[A-Za-z]+$/.test(email);
};

export const passwordValidation = (password) =>{
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
};


export const phoneValidation =(phone) =>{
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone);
};
