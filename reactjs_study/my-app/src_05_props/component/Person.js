import React, { Component } from 'react';

class Person extends Component {
  render() {
    var username = this.props.username;
   // var age = this.props.age;
    return (
      <h1>{username}{this.props.age}</h1>
    );
  }
}

export default Person;
