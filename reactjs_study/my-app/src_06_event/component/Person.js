import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleEvent}>OK</button>
        <button onClick={this.handleEvent2}>OK2</button>
        <a href="http://www.daum.net"
            onClick={this.handleEvent2}>daum</a>
  <button onClick={(e)=>this.handleEvent3(e,100)}>OK3</button>
      </div>  
    );
  }//end render()
  handleEvent3(x,y){
    console.log("handleEvent3",x,y);
  }

  //이벤트 처리
  handleEvent(){
    console.log("handleEvent");
  }
  handleEvent2(e){
    e.preventDefault();
    console.log("handleEvent2",e);
  }
}//end class

export default Person;
