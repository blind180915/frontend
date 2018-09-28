import React, { Component } from 'react';
import Person from './component/Person';

class App extends Component {
  render() {
    return (
      <div>
      <Person  username="홍길동" age={10} />   
      <Person />
      </div>        
    );
  }
}

export default App;
