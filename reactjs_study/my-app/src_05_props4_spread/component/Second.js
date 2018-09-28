import React, { Component } from 'react';
import Thrid from './Third';
class Second extends Component {
  render() {

    //const {x2,y2} = this.props;

    return (
      <div>
        <Thrid {...this.props} />
      </div>
    );
  }
}

export default Second;
