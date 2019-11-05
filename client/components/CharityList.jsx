import React, { Component } from 'react';
import { render } from 'react-dom';

class ChairityList extends Component {


  render() {
    return (
      <div>
        ChairityList are showing!
        <div>
          {this.props.chairityStuff}
        </div>
      </div>
    )
  }

}

export default ChairityList;