import React from 'react';
// eslint-disable-next-line
import { MemoryRouter, Route } from 'react-router-dom';
import Game from './routes/Game';
import Menu from './routes/Menu';

const App = props => {
  return (
    <div className="app">
      <MemoryRouter>
        <Route path="/" exact component={Menu} />
        <Route path="/game" exact component={Game} />
      </MemoryRouter>
    </div>
  );
};

export default App;
