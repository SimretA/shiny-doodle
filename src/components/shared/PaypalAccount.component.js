import React, {useContext} from 'react';
import {Modal} from "./custom-modal";
import {Button, Label, TextInput} from "./FormComponents";
import {EDIT_USER, GET_USER_PAYPAL_ID} from "../../query/auth";
import {AuthContext} from "../../context/AuthContext";
import {useLazyQuery, useMutation} from "@apollo/react-hooks";
import Loading from "./Loading.component";

export function PaypalAccount({show, close, message}) {
    const [auth, setAuth] = useContext(AuthContext);
    const [paypalAccount, setPaypalAccount] = React.useState("");
    const [getUserPaypal, {data, loading, error}] = useLazyQuery(GET_USER_PAYPAL_ID);
    const [editUser, editedUser] = useMutation(EDIT_USER);


    React.useEffect(() => {

        getUserPaypal({variables: {id: auth.account.id}});
    }, []);

    if (data) {
        console.log(data);

    }

    const handleSave = () => {
        editUser({
            variables: {
                newUser: {
                    id: auth.account.id,
                    paypalAccount: paypalAccount
                }
            }
        });

    };
    if (editedUser.loading || loading) {
        return <Modal width={"30%"} show={show} close={() => {
        }}>
            <Loading/>
        </Modal>
    }
    if (editedUser.data) {
        close();
    }
    return <Modal width={"30%"} show={show} close={() => {
    }}>
        {
            data && data.user.paypalAccount ?
                <div>

                    <Label>Current account: </Label>
                    <Label><small>{data.user.paypalAccount}</small></Label>
                    <br/>
                    <Button style={{backgroundColor:"#cafc03", color:"white"}} onClick={close}>Confirm</Button>
                    <br/>
                    <small>- or -</small>
                </div>:
                <></>
        }


        <div>


            <Label>New Account</Label>
            <TextInput value={paypalAccount} onChange={(event) => setPaypalAccount(event.target.value)}/>
            <br/>
            <small>{message || "(This account will be used in all your listing payout)"}</small>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>

            <Button onClick={handleSave}> {data && data.user.paypalAccount ? "Change" : "Save"} </Button>
        </div>
    </Modal>
}