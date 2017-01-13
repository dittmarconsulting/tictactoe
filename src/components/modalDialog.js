import React from 'react'
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
}

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.8)';

const ModalDialog = (props) => {
    const {showDialog, dialogMessage} = props.dialog
    const {closeDialogAction} = props
    return (
        <Modal
            isOpen={showDialog}
            onRequestClose={closeDialogAction}
            style={customStyles}
            contentLabel='Winner Modal'>
            <h2>{dialogMessage}</h2>
            <Button className="resetbtn" bsStyle="primary" onClick={closeDialogAction}> Play Again ? </Button>
        </Modal>
    )
}

export default ModalDialog
