import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import API from			'./API';

class CurrencyDetail extends Component {
  state = {
    tr: []
  };

  render() {
    API.getTransactions(this.props.balance.id)
    .then((tr) => {
      if (tr != null) {
	this.setState({ tr: tr });
      }
    }).catch((error) => {
      alert(error)
    })
    var transactions = [];
    for (var i = 0; i < this.state.tr.length; i++) {
      var tr = this.state.tr[i];
      transactions.push(
              <TableRow>
                <TableRowColumn>{tr.quantity}</TableRowColumn>
                <TableRowColumn>{tr.price}</TableRowColumn>
                <TableRowColumn>{tr.date}</TableRowColumn>
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
              <TableHeaderColumn>Quantity</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
	    {transactions}
          </TableBody>
      </Table>
    )
  }
}

export default CurrencyDetail;
