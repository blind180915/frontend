import React, { Component } from 'react';

class Third extends Component {
  render() {
    const {x,y} = this.props;
    return (
      <div>
        {x}<br/>
        {y}
      </div>
    );
  }
}
export default Third;
