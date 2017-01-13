import React from 'react'

const Board = (props) => {
    const {cellClickAction} = props
    const {cells} = props.game
    return (
        <div className="board">
            {cells.map(cell => {
                return (
                    <div
                        key={cell.id}
                        onClick={() => cellClickAction(cell.id, cell.text)}
                        className="cell">{cell.text}
                    </div>
                )
            })}
        </div>
    )
}

export default Board