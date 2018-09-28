import React, { Component } from 'react';

class Person extends Component {

  constructor(){
    super();
    //변경되는 값을 저장하는 변수
    this.state={
      num:0
    }

    //바인딩
    this.handleEvent = this.handleEvent.bind(this);

  }//end constructor
  handleEvent(){
     this.setState({
        num: this.state.num+1
     });
  }//end handleEvent

  render() {
    return (
      <div>
       값: {this.state.num}
       <button onClick={this.handleEvent}>+</button>
      </div>  
    );
  }
}

export default Person;
