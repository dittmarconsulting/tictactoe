import cells from '../data/cells'

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

        case 'CELL_CLICKED' : {
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

        case 'INC_MOVE' : {
            return {
                ...state,
                currentMove: state.currentMove + 1
            }
        }


        case 'PLAYER_CHANGED' : {
            return {
                ...state,
                currentPlayer: (state.currentPlayer === state.playerASymbol) ? state.playerBSymbol : state.playerASymbol
            }
        }

        case 'CHECK_WINNER' : {
            // define winning combinations
            const winningCellIds = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
            // search for the winning cell combination (i.e. [2,5,8])
            // it returns the found array or undefined
            const check = winningCellIds.find((cellIds) => {
                // init return value
                let retVal = false
                // store the text of the 3 board cells of the winning combination (i.e. [2,5,8]) in vars
                let firstCell = state.cells[cellIds[0]].text
                let secondCell = state.cells[cellIds[1]].text
                let thirdCell = state.cells[cellIds[2]].text
                // check for null
                if (firstCell && secondCell && thirdCell) {
                    // check if cells of the board have the same symbols
                    // (i.e.  2     5  &&  5     8 )
                    // (i.e. 'X'==='X' && 'X'==='X')
                    if (firstCell === secondCell && secondCell === thirdCell) {
                        // we have a match
                        retVal = true
                    }
                }
                return retVal
            })
            return {
                ...state,
                winnerFound: (check !== undefined) // convert return value into a truthy value
            }
        }

        case 'OPEN_DIALOG' : {
            return {
                ...state,
                showDialog: true
            }
        }

        case 'CLOSE_DIALOG' : {
            return {
                ...state,
                showDialog: false
            }
        }

        case 'RESET_GAME' : {
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
