import React, { Component } from 'react';
import Person from './component/Person';
import Person2 from './component/Person2';
import Person3 from './component/Person3';
import Person4 from './component/Person4';
import Person5 from './component/Person5';
import Person6 from './component/Person6';
class App extends Component {
  render() {
    return (
      <div>
      <Person /> 
      <Person2 />
      <Person3 />
      <Person4 />
      <Person5 />
      <Person6 />
      </div>       
    );
  }
}

export default App;
