import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Button } from 'react-bootstrap';
import {cellClicked, closeDialog, resetGame} from '../actions/gameAction'

import Header from '../components/header'
import Board from '../components/board'
import ModalDialog from '../components/modalDialog'
import './gameContainer.css'

class GameContainer extends React.Component {

    render() {
        const {resetGameAction} = this.props
        return (
            <div className="gc">
                <Header />
                <Button className="resetbtn" bsStyle="success" onClick={resetGameAction}>Reset Game</Button>
                <ModalDialog {...this.props} />
                <Board {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    game: state.game
})

const mapDispatchToProps = (dispatch) => ({
    cellClickAction: bindActionCreators(cellClicked, dispatch),
    closeDialogAction: bindActionCreators(closeDialog, dispatch),
    resetGameAction: bindActionCreators(resetGame, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer)

