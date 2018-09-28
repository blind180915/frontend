import React, { Component } from 'react';

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
             return <tr key={idx}>
                     <td>{idx+1}</td>
                     <td>{ele.name}</td>
                     <td>{ele.age}</td>
                    </tr>
           })
         }
       </tbody>
      </table>   
    );
  }
}

export default PersonList;
