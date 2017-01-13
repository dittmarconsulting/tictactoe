const initState = {
    gameState: {
        cells: [
            {id: 0,text: null},
            {id: 1,text: null},
            {id: 2,text: null},
            {id: 3,text: null},
            {id: 4,text: null},
            {id: 5,text: null},
            {id: 6,text: null},
            {id: 7,text: null},
            {id: 8,text: null}
        ],
        playerASymbol: 'X',
        playerBSymbol: 'O',
        currentPlayer: 'X',
        currentMove: 0,
        winnerFound: false
    },
    dialogState: {
        showDialog: false,
        dialogMessage: null
    }
}

export default initState