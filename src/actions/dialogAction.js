import C from '../constants'

export const openDialog = () => {
    return (dispatch, getState) => {

        // assign an empty winner text
        let winnerText = (getState().game.winnerFound) ?
            'Player `' + getState().game.currentPlayer + '` won! Congratulation ...' :
            'It seems we reached an impasse!'

        // dispatch action to change the dialog text
        dispatch({
            type: C.CHANGE_DIALOG_TEXT,
            payload: 'dssd'
        })

        // dispatch action to close the dialog
        dispatch({
            type: C.OPEN_DIALOG
        })
    }
}

export const closeDialog = () => {
    return (dispatch, getState) => {

        // dispatch action to close the dialog
        dispatch({
            type: C.CLOSE_DIALOG
        })

        // dispatch action to reset the game
        dispatch({
            type: C.RESET_GAME
        })
    }
}