import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MovieDetail from '../pages/MovieDetail';
import Header from './Header';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/detail/:peliculaid" component={MovieDetail} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
