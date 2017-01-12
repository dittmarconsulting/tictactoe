import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import store from './store'
import GameContainer from './containers/gameContainer.js';
import './static/css/index.css';

ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
  document.getElementById('root')
);
