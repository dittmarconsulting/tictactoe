import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middleware = applyMiddleware(
    thunk,
    logger()
)

const store = createStore(
    rootReducer,
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store
