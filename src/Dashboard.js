import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import CurrencyList from './CurrencyList';
import Statistics from './Statistics';

class Dashboard extends Component {
  render() {
    return (
	    <div>
	      <Paper zDepth={2} className="statistics container">
	      <h2>Portfolio</h2>
	      <button>Add transation</button>
	    </Paper>
	      <Statistics />
	      <CurrencyList />
	    </div>
    )
  }
}

export default Dashboard;
