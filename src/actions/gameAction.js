// ------------------------------------------
// GAME ACTIONS
// ------------------------------------------

export function cellClicked(cellId) {
    return (dispatch, getState) => {

        // dispatch the click action
        dispatch({
            type: 'CELL_CLICKED',
            payload: cellId
        })

        // dispatch increment move action
        dispatch({
            type:'INC_MOVE'
        })

        // dispatch check for winner action
        dispatch({
            type:'CHECK_WINNER'
        })

        // check for winner & moves
        if (!getState().game.winnerFound && getState().game.currentMove < 9) {

            // dispatch player changed action
            dispatch({
                type:'PLAYER_CHANGED'
            })

        } else {

            // dispatch open winner dialog action
            dispatch({
                type:'OPEN_DIALOG'
            })
        }
    }
}

export function resetGame() {
    return {
        type: 'RESET_GAME'
    }
}

// ------------------------------------------
// WINNER DIALOG ACTION
// ------------------------------------------

export function closeDialog() {
    return (dispatch, getState) => {

        // dispatch action to close the dialog
        dispatch({
            type:'CLOSE_DIALOG'
        })

        // dispatch action to reset the game
        dispatch({
            type:'RESET_GAME'
        })
    }
}