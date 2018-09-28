import React, { Component } from 'react';

class Person extends Component {
  render() {
    let username = '홍길동';
    return (
      <h1>이름은 {username} 나이는 {20}</h1>
    );
  }
}

export default Person;
