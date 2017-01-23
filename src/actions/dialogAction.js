import C from '../constants'

export const openDialog = (dialogText) => {
    return (dispatch) => {

        // dispatch action to change the dialog text
        dispatch({
            type: C.CHANGE_DIALOG_TEXT,
            payload: dialogText
        })

        // dispatch action to close the dialog
        dispatch({
            type: C.OPEN_DIALOG
        })
    }
}

export const closeDialog = () => {
    return (dispatch) => {

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
