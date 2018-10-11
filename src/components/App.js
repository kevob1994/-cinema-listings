import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MovieDetail from '../pages/MovieDetail';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/detail" component={MovieDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
