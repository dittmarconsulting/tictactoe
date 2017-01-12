import cells from '../data/cells'
import C from '../constants'

const initState = {
    playerASymbol: 'X',
    playerBSymbol: 'O',
    currentPlayer: 'X',
    winnerFound: false,
    currentMove: 0,
    cells: cells,
    showDialog: false
}

export default function game(state=initState, action) {
    switch(action.type) {

        // in case someone of a cell click action call
        case C.CELL_CLICKED : {
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

        // in case of a move increment action call
        case C.INC_MOVE : {
            return {
                ...state,
                currentMove: action.payload
            }
        }

        // in case of a swap player action call
        case C.SWAP_PLAYER : {
            return {
                ...state,
                currentPlayer: action.payload
            }
        }

        // in case of a check winner action call
        case C.CHECK_WINNER : {
            return {
                ...state,
                winnerFound: action.payload
            }
        }

        // in case of an open dialog action call
        case C.OPEN_DIALOG : {
            return {
                ...state,
                showDialog: true
            }
        }

        // in case of a close dialog action call
        case C.CLOSE_DIALOG : {
            return {
                ...state,
                showDialog: false
            }
        }

        // in case of a reset game action call
        case C.RESET_GAME : {
            return {
                ...state,
                cells: cells,
                currentPlayer: 'X',
                currentMove: 0,
                winnerFound: false
            }
        }

        default: return state
    }
}
