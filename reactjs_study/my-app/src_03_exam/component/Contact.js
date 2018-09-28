import React, { Component } from 'react';
import ContactList from './ContactList';
class Contact extends Component {
  render() {
    return (
      <div>
      <h1>Contact 홈페이지</h1>
      <ContactList />
      </div>
    );
  }
}

export default Contact;
