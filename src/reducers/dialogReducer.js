import C from '../constants'
import initState from '../initState'

const showDialog = (state, action) => {
    return {
        ...state,
        showDialog: action
    }
}

const changeDialogText = (state, action) => {
    return {
        ...state,
        dialogMessage: action.payload
    }
}

// all reducers for the dialog
const dialogReducer = (state=initState.dialogState, action) => {
    switch(action.type) {

        // in case of an open dialog action call
        case C.OPEN_DIALOG : return showDialog(state, true)

        // in case of a close dialog action call
        case C.CLOSE_DIALOG : return showDialog(state, false)

        // in case of a change dialog text action call
        case C.CHANGE_DIALOG_TEXT : return changeDialogText(state, action)

        default: return state
    }
}

export default dialogReducer