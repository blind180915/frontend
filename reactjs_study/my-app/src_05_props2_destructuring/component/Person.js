import React, { Component } from 'react';

class Person extends Component {
  render() {
    // var username = this.props.username;
    // var age = this.props.age;
    var {username,age} = this.props; //destructuring
    return (
      <h1>{username}{age}</h1>
    );
  }
}

export default Person;
