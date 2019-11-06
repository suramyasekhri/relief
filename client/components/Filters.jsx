import React, { Component } from 'react';
import { render } from 'react-dom';

class Filters extends Component {


  render() {
    return (
      <div>
        Filters are showing!
        Filter with zip code
        Filter with 
        <div>
          {this.props.filterStuff}
        </div>
      </div>
    )
  }

}



export default Filters;