import React, { Component } from 'react';
import Person from './component/Person';

class App extends Component {
  render() {
    return (
      <Person username='홍길동' age="20"/>      
    );
  }
}

export default App;
