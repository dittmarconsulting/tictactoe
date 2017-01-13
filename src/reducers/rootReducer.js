import {combineReducers} from 'redux'
import {gameReducer, dialogReducer} from './gameReducer'

export default combineReducers({
    game: gameReducer,
    dialog: dialogReducer
})
