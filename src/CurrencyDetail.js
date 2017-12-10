import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class CurrencyDetail extends Component {
  render() {
    return (
<Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Foo</TableHeaderColumn>
        <TableHeaderColumn>Bar</TableHeaderColumn>
        <TableHeaderColumn>Baz</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn>A</TableRowColumn>
        <TableRowColumn>B</TableRowColumn>
        <TableRowColumn>C</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>D</TableRowColumn>
        <TableRowColumn>E</TableRowColumn>
        <TableRowColumn>F</TableRowColumn>
      </TableRow>
    </TableBody>
</Table>
    )
  }
}

export default CurrencyDetail;
