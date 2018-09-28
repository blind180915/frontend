import React, { Component } from 'react';
var arr = [100,200,300];
function xxx(){
  return arr.map(function(ele,idx){
    return <li key={idx}>{ele}</li>;
 })
}
class Person3 extends Component {
  render() {
    return (
      <ul>
      {
        xxx()
      }
      </ul>
    );
  }
}

export default Person3;
