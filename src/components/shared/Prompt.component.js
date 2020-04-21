import React from 'react';
import {Modal} from "./custom-modal";
import {Button} from "./FormComponents";


export  function Prompt({onYes, onNo, show, close}) {

    return <Modal show={show} close={close}>

        <p>Delete Review?</p>
        <Button onClick={onYes}>Yes</Button>
    </Modal>
}
