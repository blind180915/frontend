import React, { Component } from 'react';
import Person from './Person';
class PersonList extends Component {
  render() {
    var persons = this.props.data;
    return (
      <table border="1">
        <thead>
         <tr>
           <td>번호</td>
           <td>이름</td>
           <td>나이</td>
         </tr>
         </thead>
         <tbody>
         {
           persons.map(function(ele,idx){
             return (
              <Person data={ele} key={idx+1} k={idx+1} />
             )
           })
         }
       </tbody>
      </table>   
    );
  }
}

export default PersonList;
