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

class CurrencyList extends Component {
  // TODO: Show/Hide CurrencyDetail on click
  render() {
    var balances = [];
    for (var i = 0; i < this.props.balances.length; i++) {
      var balance = this.props.balances[i];
      balances.push(
	      <TableRow key={balance.currencyID}>
	        <TableRowColumn>{balance.currencyID}</TableRowColumn>
	        <TableRowColumn>{balance.quantity}</TableRowColumn>
	      </TableRow>
      );
      balances.push(
	      <TableRow key={balance.currencyID + "-child"}>
		<TableRowColumn colSpan={3}
		    children={<CurrencyDetail balance={balance}
					      transactions={this.props.transactions} />
			    } />
	      </TableRow>
      );
    }
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
  }
}

export default CurrencyList;
