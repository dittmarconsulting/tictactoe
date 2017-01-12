import React from 'react'

export default class Board extends React.Component {

    constructor() {
        super()
        this.cellComponent = this.cellComponent.bind(this)
        this.cellClicked = this.cellClicked.bind(this)
    }

    cellClicked(id, text) {
        // check if not null
        if(!text)
            this.props.cellClickAction(id)
    }

    cellComponent(cell) {
        return (
            <div key={cell.id} onClick={() => this.cellClicked(cell.id, cell.text)} className="cell">{cell.text}</div>
        )
    }

    render() {
        const {cells} = this.props.game
        return (
            <div className="board">
                {cells.map(this.cellComponent)}
            </div>
        )
    }
}
