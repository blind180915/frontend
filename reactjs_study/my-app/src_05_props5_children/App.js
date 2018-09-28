import React, { Component } from 'react';
import Person from './component/Person';

class App extends Component {
  render() {
    return (
      <Person x="홍길동" >
         Hello
         <span>World</span>
      </Person>      
    );
  }
}

export default App;
