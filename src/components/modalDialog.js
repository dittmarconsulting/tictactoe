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
};

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.8)';


const ModalDialog = (props) => {
    const {showDialog, currentPlayer, winnerFound} = props.game
    const {closeDialogAction} = props
    // assign an empty winner text
    let winnerText = null
    // populate winner text based on state conditions
    if(winnerFound) {
        winnerText = 'Player `' + currentPlayer + '` won! Congratulation ...'
    } else {
        winnerText = 'It seems you reached an impasse!'
    }
    return (
        <Modal
            isOpen={showDialog}
            onRequestClose={closeDialogAction}
            style={customStyles}
            contentLabel='Winner Modal'>
            <h2>{winnerText}</h2>
            <Button className="resetbtn" bsStyle="primary" onClick={closeDialogAction}> Play Again ? </Button>
        </Modal>
    )
}

export default ModalDialog
