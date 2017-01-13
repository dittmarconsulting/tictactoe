import C from '../constants'
import initState from '../initState'

// Refactoring reducer logic using functional decomposition

const cellCliced = (state, action) => {
    return {
        ...state,
        cells: [
            // slices the array from beginning to position = action.payload
            ...state.cells.slice(0, action.payload),
            // modify the array item of position = action.payload
            {id: action.payload, text: state.currentPlayer},
            // add the rest of the array after position = action.payload + 1
            ...state.cells.slice(action.payload + 1)
        ]
    }
}

const incrementMoveCounter = (state, action) => {
    return {
        ...state,
        currentMove: action.payload
    }
}

const swapPlayer = (state, action) => {
    return {
        ...state,
        currentPlayer: action.payload
    }
}

const checkWinner = (state, action) => {
    return {
        ...state,
        winnerFound: action.payload
    }
}


const showDialog = (state, action) => {
    return {
        ...state,
        showDialog: action
    }
}

const resetGame = (state) => {
    return {
        ...state,
        cells: initState.cells,
        currentPlayer: 'X',
        currentMove: 0,
        winnerFound: false
    }
}

// all reducers for the game
export const gameReducer = (state=initState, action) => {
    switch(action.type) {

        // in case of a cell click action call
        case C.CELL_CLICKED : return cellCliced(state, action)

        // in case of a move increment action call
        case C.INC_MOVE : return incrementMoveCounter(state, action)

        // in case of a swap player action call
        case C.SWAP_PLAYER : return swapPlayer(state, action)

        // in case of a check winner action call
        case C.CHECK_WINNER : return checkWinner(state, action)

        // in case of a reset game action call
        case C.RESET_GAME : return resetGame(state)

        default: return state
    }
}

// all reducers for the dialog
export const dialogReducer = (state=initState, action) => {
    switch(action.type) {

        // in case of an open dialog action call
        case C.OPEN_DIALOG : return showDialog(state, true)

        // in case of a close dialog action call
        case C.CLOSE_DIALOG : return showDialog(state, false)

        default: return state
    }
}
