import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import CurrencyDetail from './CurrencyDetail'

function getURLcurrency(currencies, id) {
  for (var i = 0; i < currencies.length; i++) {
    if (currencies[i].id === id) {
      return currencies[i].logoURL;
    }
  }
}

const logoStyle = {
  height: "40px"
};

class CurrencyList extends Component {
  // TODO: Show/Hide CurrencyDetail on click
  render() {
    var balances = [];
    for (var i = 0; i < this.props.balances.length; i++) {
      var balance = this.props.balances[i];
      balances.push(
	      <TableRow key={balance.id}>
	        <TableRowColumn>
		    <img src={ getURLcurrency(this.props.currencies, balance.currencyID) } 
			 style={logoStyle}/>
		</TableRowColumn>
	        <TableRowColumn>{balance.quantity}</TableRowColumn>
	      </TableRow>
      );
      balances.push(
	      <CurrencyDetail balance={balance}
	  	transactions={this.props.transactions} />
      );
    }
    if (balances.length > 0) {
      return (
          <Table>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
              >
                <TableRow>
                  <TableHeaderColumn>Currency ID</TableHeaderColumn>
                  <TableHeaderColumn>Quantity</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {balances}
              </TableBody>
          </Table>
      )
    } else {
      return null;
    }
  }
}

export default CurrencyList;
