import React, { Component } from 'react';


import Header from './header';
import SeatList from '../containers/seat-list';
import SeatDetail from '../containers/seat-detail';

class App extends Component {
  render() {
    return (
      <div >
        <div><Header/></div>
        <div>
          <div><SeatList /> </div>
          <div><SeatDetail /> </div>
        </div>  
      </div>
    );
  }
}

export default App;
