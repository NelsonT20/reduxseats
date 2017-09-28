import React, { Component } from 'react';


import Header from './header';
import Seats from '../containers/seats';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
          <div>
            <Seats />
          </div>
      </div>
    );
  }
}

export default App;
