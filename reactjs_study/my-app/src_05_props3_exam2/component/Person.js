import React, { Component } from 'react';

class Person extends Component {
  render() {
    var {k,data} = this.props;
    console.log(this.props)
    return (
     
          <tr>
                     <td>{k}</td>
                     <td>{data.name}</td>
                     <td>{data.age}</td>
                    </tr>
          
    );
  }
}

export default Person;
