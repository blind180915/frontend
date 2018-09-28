import React, { Component } from 'react';
import Person from './component/Person';

class App extends Component {

  //변수
  phones=["010","011","017"];
  isMarried = false;
  myFun=function(){
    console.log("myFun 함수");
  };
  kkk={xxx:100};
  render() {
    return (
      <div>
      <Person  username="홍길동" 
               age={10} 
             //  phones={this.phones}
               isMarried={this.isMarried}
               myFun={this.myFun} 
               kkk={this.kkk}/>   
      </div>        
    );
  }
}

export default App;
