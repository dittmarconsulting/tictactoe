test('Winner should be true with combination 0,1,2', () => {

    // get the init state
    const initState = require('../src/initState')

    // create the fake state object and store the cells
    let state = {
        cells: initState.default.gameState.cells
    }

    // modify cells to win
    state.cells[0].text = 'X'
    state.cells[1].text = 'X'
    state.cells[2].text = 'X'

    //console.log(state.cells);
    const utility = require('../src/utility/utility')

    expect(utility.checkWinner(state)).toBe(true)
})


test('Winner should NOT be true when cells are null', () => {

    // get the init state
    const initState = require('../src/initState')

    // create the fake state object and store the cells
    let state = {
        cells: initState.default.gameState.cells
    }

    // modify cells to win
    state.cells[0].text = null
    state.cells[1].text = null
    state.cells[2].text = null

    //console.log(state.cells);
    const utility = require('../src/utility/utility')

    expect(utility.checkWinner(state)).toBe(false)
})