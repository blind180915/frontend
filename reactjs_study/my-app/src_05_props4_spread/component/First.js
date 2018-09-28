import React, { Component } from 'react';
import Second from './Second';
class First extends Component {
  render() {

  // const {x,y} = this.props;

    return (
      <div>
        <Second {...this.props} />
      </div>
    );
  }
}

export default First;
