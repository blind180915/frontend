import React, { Component } from 'react';

//props 데이터 타입 설정
import PropTypes from 'prop-types';

class Person extends Component {
  render() {

    const{username,age,phones,myFun,kkk,isMarried} 
    = this.props;
    console.log(this.props);
    return (
      <div>
      이름:{username}<br/>
      나이:{age}<br/>
      phones:{phones}<br/>
      isMarried:{isMarried.toString()}<br/>
      kkk:{kkk.xxx}<br/>
      myFun:{myFun()}<br/>
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
  age:PropTypes.number,
  phones:PropTypes.array.isRequired,
  myFun:PropTypes.func,
  kkk:PropTypes.object,
  isMarried:PropTypes.bool
}

export default Person;
