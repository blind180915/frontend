import React, { Component } from 'react';

class Person extends Component {
  render() {

    const{username,age} = this.props;

    return (
      <div>
      이름:{username}<br/>
      나이:{age}<br/>
     </div>   
    );
  }
}//end class

Person.defaultProps={
   username:'유관순',
   age:20
};


export default Person;
