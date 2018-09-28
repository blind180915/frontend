import React, { Component } from 'react';
import PersonList from './component/PersonList';

class App extends Component {

    persons=[
      {name:'홍길동',age:20},
      {name:'이순신',age:30},
      {name:'유관순',age:40},
      {name:'강감찬',age:50}
    ];

  render() {
    return (
      <PersonList data={this.persons}/>      
    );
  }
}

export default App;
