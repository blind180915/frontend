import React, { Component } from 'react';

class Person extends Component {

 constructor(){
   super();

   //이벤트 바인딩
   this.submit = this.submit.bind(this);
 }


  render() {
    return (
      <form onSubmit={this.submit}>
        아이디<input type="text" ref="userid" /><br/>
        비밀번호<input type="text" ref="passwd" /><br/>
        <button>로그인</button>
      </form>  
    );
  }//end render()
   submit(e){
      e.preventDefault();
      console.log("submit", this.refs);
      const {userid,passwd} = this.refs;
      console.log(userid.value,passwd.value);
   }
}//end class

export default Person;
