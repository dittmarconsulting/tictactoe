import C from '../constants'
import {checkWinner} from '../utility/utility'

// ------------------------------------------
// GAME ACTION CREATORS
// ------------------------------------------

export const cellClicked = (cellId)  => {
    return (dispatch, getState) => {

        // dispatch the click action
        dispatch({
            type: C.CELL_CLICKED,
            payload: cellId
        })

        // dispatch increment move action
        dispatch({
            type: C.INC_MOVE,
            payload: getState().game.currentMove + 1
        })

        // dispatch check for winner action
        dispatch({
            type: C.CHECK_WINNER,
            payload: checkWinner(getState().game)
        })

        // check for winner & moves
        if (!getState().game.winnerFound && getState().game.currentMove < 9) {

            // dispatch player changed action
            dispatch({
                type: C.SWAP_PLAYER,
                payload: (getState().game.currentPlayer === getState().game.playerASymbol)
                    ? getState().game.playerBSymbol
                    : getState().game.playerASymbol
            })

        } else {

            // dispatch open winner dialog action
            dispatch({
                type: C.OPEN_DIALOG
            })
        }
    }
}

export const resetGame = () => {
    return {
        type: C.RESET_GAME
    }
}

// ------------------------------------------
// WINNER DIALOG ACTION CREATOR
// ------------------------------------------

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