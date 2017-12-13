import React, { Component } from 'react';
import AppBar from		'material-ui/AppBar';
import RaisedButton from	'material-ui/RaisedButton';
import { Link } from		'react-router-dom';
import Auth from		'./Auth';

const buttonStyle = {
  display: 'flex',
  alignItems: 'center'
};

class Header extends Component {
  render() {
    return (
	    <div>
	      <AppBar title="Cryptfolio">
		<Link to="/logout" style={buttonStyle}>
		  <RaisedButton label="Logout" secondary={true} disabled={!Auth.isAuth()} />
		</Link>
	      </AppBar>
	    </div>
    )
  }
}

export default Header;
