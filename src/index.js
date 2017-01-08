import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import GameContainer from './containers/gameContainer.js';
import './static/css/index.css';

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

ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
  document.getElementById('root')
);
