import React, { Component } from 'react';

class Person extends Component {

  constructor(){
    super();
    this.state={
       userid:'',
       passwd:''
    }
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e){
     e.preventDefault();
     const {userid, passwd} = this.refs;
     this.setState({
        userid:userid.value,
        passwd:passwd.value
     })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleEvent}>
     아이디<input type="text" ref="userid" /><br/>
     비밀번호<input type="text" ref="passwd" /><br/>
     <button>로그인</button>
        </form> 
       아이디:{this.state.userid}<br/> 
       비밀번호:{this.state.passwd}<br/> 
     </div>   
    );
  }
}

export default Person;
