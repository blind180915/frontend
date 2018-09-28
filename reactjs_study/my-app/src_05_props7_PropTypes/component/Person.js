import React, { Component } from 'react';

//props 데이터 타입 설정
import PropTypes from 'prop-types';

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

Person.propTypes={
  username:PropTypes.string,
  age:PropTypes.number
}

export default Person;
