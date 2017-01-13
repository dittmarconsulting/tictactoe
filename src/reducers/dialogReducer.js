import C from '../constants'
import initState from '../initState'

const showDialog = (state, action) => {
    return {
        ...state,
        showDialog: action
    }
}

// all reducers for the dialog
const dialogReducer = (state=initState.dialogState, action) => {
    switch(action.type) {

        // in case of an open dialog action call
        case C.OPEN_DIALOG : return showDialog(state, true)

        // in case of a close dialog action call
        case C.CLOSE_DIALOG : return showDialog(state, false)

        default: return state
    }
}

export default dialogReducer