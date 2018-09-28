import React, { Component } from 'react';

class Person6 extends Component {
  render() {
    var myStyle={
       color:'red',
       fontSize:20,
    };
  return (
      <div>
        {/* JSX안에서 주석처리 */}
      <p style={myStyle}>Hello</p>
      <br />
      </div>
    );
  }
}

export default Person6;
