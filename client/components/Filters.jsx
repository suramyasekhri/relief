import React, { Component } from 'react';
import { render } from 'react-dom';

class Filters extends Component {


  render() {
    return (
      <div>
        Filters are showing!
        <div>
          {this.props.filterStuff}
        </div>
      </div>
    )
  }

}

export default Filters;