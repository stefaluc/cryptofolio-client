import React, { Component } from 'react';
import AppBar from		'material-ui/AppBar';

class Header extends Component {
  render() {
    return (
	    <div>
          <AppBar
             title="Cryptfolio"
           />
	    </div>
    )
  }
}

export default Header;
