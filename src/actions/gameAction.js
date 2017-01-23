import C from '../constants'
import {openDialog} from './dialogAction'
import {checkWinner} from '../utility/utility'


export const cellClicked = (cellId, cellText)  => {
    return (dispatch, getState) => {

        // do nothing if cell is NOT null to avoid overriding cell
        if(cellText) return

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

            // create dialog text
            let dialogText = (getState().game.winnerFound) ?
                'Player `' + getState().game.currentPlayer + '` won! Congratulation ...' :
                'It seems we reached an impasse!'

            // change text & open dialog action
            dispatch(openDialog(dialogText))
        }
    }
}

export const resetGame = () => {
    return {
        type: C.RESET_GAME
    }
}

