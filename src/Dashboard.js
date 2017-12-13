import React, { Component } from 'react';

import Paper from		'material-ui/Paper';

import API from			'./API';
import Statistics from		'./Statistics';
import CurrencyList from	'./CurrencyList';
import CurrencyActions from	'./CurrencyActions';

class Dashboard extends Component {
  state = {
    balances: [],
    currencies: []
  };

  componentDidMount() {
    API.getTransactions()
    .then((transactions) => {
      this.setState({transactions: transactions});
    })
    .catch((error) => {
      alert(error);
    })
    API.getBalances()
    .then((balances) => {
      this.setState({balances: balances});
    })
    .catch((error) => {
      alert(error);
    })
    API.getCurrencies()
    .then((currencies) => {
      this.setState({currencies: currencies});
    })
    .catch((error) => {
      alert(error);
    })
  }

  render() {
    return (
	    <div>
	      <Paper zDepth={2} className="statistics container">
		<h2>Portfolio</h2>
	      </Paper>
	      <Statistics balances={this.state.balances}
			  transactions={this.state.transactions}
	      />
	      <Paper zDepth={2} className="container">
		<CurrencyList balances={this.state.balances}
			      transactions={this.state.transactions}
			      currencies={this.state.currencies}
		/>
		<CurrencyActions balances={this.state.balances} />
	      </Paper>
	    </div>
    )
  }
}

export default Dashboard;
