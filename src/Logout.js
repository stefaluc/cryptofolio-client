import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Auth from './Auth'

class Logout extends Component {
  render() {
    Auth.deleteToken();
    return (
	    <Redirect to='/'/>
    )
  }
}

export default Logout;
