import {combineReducers} from 'redux'
import gameReducer from './gameReducer'
import dialogReducer from './dialogReducer'

export default combineReducers({
    game: gameReducer,
    dialog: dialogReducer
})
