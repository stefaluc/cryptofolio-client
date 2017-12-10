import React, { Component } from 'react';

import RaisedButton from	'material-ui/RaisedButton';
import TextField from		'material-ui/TextField';
import SelectField from		'material-ui/SelectField';
import MenuItem from		'material-ui/MenuItem';
import Recaptcha from		'react-recaptcha';

import API from		'./API'

class Signup extends Component {
  state = {
    currency: 0,
    email: '',
    password: '',
    passwordCheck: '',
    firstName: '',
    lastName: ''
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
        <div className="main-container">
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({firstName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({lastName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             type="password"
             hintText="Confirm your Password"
             floatingLabelText="Confirm Password"
             onChange = {(event,newValue) => this.setState({passwordCheck:newValue})}
             />
           <br/>
	   <SelectField
             floatingLabelText="Favourite currency"
	     value={this.state.currency}
             onChange={this.handleChange}
	     style={selectStyle}
           >
             <MenuItem value={1} primaryText="USD" />
             <MenuItem value={2} primaryText="Euro" />
             <MenuItem value={3} primaryText="Baht" />
           </SelectField>
	    <Recaptcha
	    sitekey="6LfUazwUAAAAAFiCbWGjDvTkJTVsQwQR_cJZskF_"
	    />
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.register(event) }/>
        </div>
    )
  }

  register() {
    API.signup(this.state.email, this.state.password)
    .then((response) => {
    })
    .catch((error) => {
      alert(error)
    })
  }
}

const selectStyle = {
  textAlign: 'left'
};

const style = {
 margin: 15,
};

export default Signup;
