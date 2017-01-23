import React from 'react'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer';

import GameContainer from '../src/containers/gameContainer'

// create a fake store
import rootReducer from '../src/reducers/rootReducer'
import {createStore} from 'redux'

const store = createStore(rootReducer)

it('Game should render without crashing', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <GameContainer />
        </Provider>,
        document.getElementById('root')
    ).toJSON()
    expect(tree).toMatchSnapshot()
})

