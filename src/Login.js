import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import Auth from		'./Auth'
import RaisedButton from	'material-ui/RaisedButton';
import TextField from		'material-ui/TextField';

import API from		'./API'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      logged: Auth.isAuth()
    }
  }
  render() {
    if (!this.state.logged) {
      return (
        <div className="main-container">
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange = {(event,newValue) => this.setState({username:newValue})}
          />
          <br/>
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange = {(event,newValue) => this.setState({password:newValue})}
          />
          <br/>
          <Link to="/signup">
            <RaisedButton label="Register" primary={true} style={style}/>
          </Link>
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
        </div>
      )
    } else {
      return (
	      <Redirect to='/'/>
      )
    }
  }
  handleClick(event){
    var email = this.state.username;
    var password = this.state.password;

    API.login(email, password)
      .then((token) => {
        Auth.setToken(token)
        this.setState({logged: true})
      })
      .catch((error) => {
        alert(error)
      })
  }
}

const style = {
 margin: 15,
};

export default App;

