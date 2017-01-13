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


const resetGame = (state) => {
    return {
        ...state,
        cells: initState.gameState.cells,
        currentPlayer: 'X',
        currentMove: 0,
        winnerFound: false
    }
}

// all reducers for the game
const gameReducer = (state=initState.gameState, action) => {
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

export default gameReducer
