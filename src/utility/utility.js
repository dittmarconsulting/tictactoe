// private function that returns the winner boolean
export const checkWinner = (state) => {
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
    // convert return value into a truthy value
    return (check !== undefined)
}
