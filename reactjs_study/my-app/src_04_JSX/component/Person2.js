import React, { Component } from 'react';

// return 메서드안에서 자바스크립트 사용
class Person2 extends Component {
  render() {
    var arr = [10,20,30];
    return (
      <ul>
      {
        arr.map(function(ele,idx){
           return <li key={idx}>{ele}</li>;
        })
      }
      </ul>
    );
  }
}

export default Person2;
