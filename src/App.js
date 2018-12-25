import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Pokedex from './components/Pokedex';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Pokedex {...this.props} />
      </HashRouter>
    );
  }
}

export default App;
