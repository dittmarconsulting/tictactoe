import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './containers/gameContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameContainer />, div);
});
