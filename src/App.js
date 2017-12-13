import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

import Auth from	'./Auth'
import Login from	'./Login'
import Logout from	'./Logout'
import Signup from	'./Signup'
import Dashboard from	'./Dashboard'
import Header from	'./Header'
import Footer from	'./Footer'
import			'./App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isAuth() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


class App extends Component {
  render() {
    return (
	    <div>
	       <MuiThemeProvider>
		<div>
		  <Router>
		    <div>
		      <Header/>
		      <Route exact path="/login" component={Login}/>
		      <Route exact path="/logout" component={Logout}/>
		      <Route exact path="/signup" component={Signup}/>
		      <PrivateRoute exact path="/" component={Dashboard}/>
		      <Footer/>
		    </div>
		  </Router>
		</div>
	       </MuiThemeProvider>
	    </div>
    );
  }
}

export default App;
