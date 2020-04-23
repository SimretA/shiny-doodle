import React from 'react';
import {Modal} from "./custom-modal";
import {Button} from "./FormComponents";


export  function Prompt({onYes, onNo, show, close,message}) {

    return <Modal width={"30%"}  show={show} close={close}>

        <p>{message || "Are you sure?"}</p>
        <Button onClick={onYes}>Yes</Button>
    </Modal>
}
