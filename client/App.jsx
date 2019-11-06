import React, { Component } from 'react';
import { render } from 'react-dom';

import Filters from './components/Filters';
import ChairityList from './components/CharityList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterState: 'filterStuff',
      chairityState: 'chairityStuff',
    }
  }

  render() {
    return (
      <div>
        <h1>RELIEF</h1>
        <Filters filterStuff={this.state.filterState}/>
        <br />
        <br />
        <br />
        <ChairityList chairityStuff={this.state.chairityState}/>
      </div>
    )
  }

}

export default App;