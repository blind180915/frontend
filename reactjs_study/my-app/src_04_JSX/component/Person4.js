import React, { Component } from 'react';



class Person4 extends Component {
  
  //이벤트 처리 + camel 표기법 사용
  handleEvent(){
    console.log("handleEvent");
  }
  
  render() {
    
    return (
      <button onClick={this.handleEvent}>click</button>
    );
  }
}

export default Person4;
