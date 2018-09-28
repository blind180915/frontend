import React, { Component } from 'react';

class Person extends Component {
  render() {
    const {x} = this.props;
    var x2 = this.props.x;
    //body 얻기
    console.log(this);
    var body = this.props.children;
    console.log(body[0]);
    console.log(body[1].props.children);
    return (
      <div>
      <h1>{x}</h1>
      <h1>{x2}</h1>
      {body}
      </div>
    );
  }
}

export default Person;
