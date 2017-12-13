import React, { Component } from 'react';

import FlatButton from		'material-ui/FlatButton';
import RaisedButton from	'material-ui/RaisedButton';
import Dialog from		'material-ui/Dialog';
import TextField from		'material-ui/TextField';
import SelectField from		'material-ui/SelectField';
import MenuItem from		'material-ui/MenuItem';
import DatePicker from		'material-ui/DatePicker';

import API from			'./API';

class CurrencyActions extends Component {
  state = {
    openDialogBalance: false,
    openDialogTransaction: false,
  };

  payloadBalance = {
    cryptocurrencyID: -1,
    quantity: -1,
  };
  payloadTransaction = {
    balanceID: -1,
    quantity: '',
    price: -1,
    date: '',
  };

  openDialogBalance = () => { this.setState({openDialogBalance: true}) };
  closeDialogBalance = () => { this.setState({openDialogBalance: false}) };

  openDialogTransaction = () => { this.setState({openDialogTransaction: true}) };
  closeDialogTransaction = () => { this.setState({openDialogTransaction: false}) };

  submitDialogBalance = () => {
    var p = this.payloadBalance;
    API.insertBalance(p.cryptocurrencyID, parseFloat(p.quantity));
    this.closeDialogBalance();
  };

  submitDialogTransaction = () => {
    var p = this.payloadTransaction;
    API.insertTransaction(p.balanceID, p.quantity, p.price, p.date);
    this.closeDialogTransaction();
  };

  render(props) {
    const actionsDialogBalance = [
      <FlatButton
        label="cancel"
        primary={true}
        onClick={this.closeDialogBalance}
      />,
      <FlatButton
        label="submit"
        primary={true}
        onClick={this.submitDialogBalance}
      />,
    ];

    const actionsDialogTransaction = [
      <FlatButton
        label="cancel"
        primary={true}
        onClick={this.closeDialogTransaction}
      />,
      <FlatButton
        label="submit"
        primary={true}
        onClick={this.submitDialogTransaction}
      />,
    ];

    var balances = []
    for (var i = 0; i < this.props.balances.length; i++) {
      var balance = this.props.balances[i];
      balances.push(<MenuItem key={balance.id} value={balance.id} primaryText={balance.id} />)
    }

    return (
      <div className="buttons-bottom">

    	  <RaisedButton label="Add balance" primary={true} style={{margin: 15}}
	    onClick={this.openDialogBalance} />
	   <Dialog
    	     title="Add Balance"
    	     actions={actionsDialogBalance}
    	     modal={false}
    	     open={this.state.openDialogBalance}
    	     onRequestClose={this.closeDialogBalance}
    	   >
	     <TextField
	       hintText="Quantity"
	       type="number"
	       onChange={ (event, val) => this.payloadBalance.quantity = val }
	     /><br />
	     <SelectField
	       floatingLabelText="Currency"
	       value={this.state.cryptocurrencyID}
	       onChange={ (event, index, val) => {
		 this.payloadBalance.cryptocurrencyID = val
		 this.setState({cryptocurrencyID: val})
	       }}
             >
               <MenuItem value={1} primaryText="USD" />
               <MenuItem value={2} primaryText="Euro" />
               <MenuItem value={3} primaryText="Baht" />
             </SelectField>
	   </Dialog>

	  <RaisedButton label="Add transaction" secondary={true} style={{margin: 15}}
	    onClick={this.openDialogTransaction} />
    	  <Dialog
    	    title="Add Transaction"
    	    actions={actionsDialogTransaction}
    	    modal={false}
    	    open={this.state.openDialogTransaction}
    	    onRequestClose={this.closeDialogTransaction}
    	  >
	    <SelectField
	      floatingLabelText="Balance"
	      value={this.state.balanceID}
	      onChange={ (event, index, val) => {
	        this.payloadTransaction.balanceID = val
	        this.setState({balanceID: val})
	      }}
             ><br />
	      {balances}
            </SelectField><br />
	    <TextField
	      hintText="Quantity"
	      type="number"
	      onChange={ (event, val) => this.payloadTransaction.quantity = val }
	    /><br />
	    <TextField
	      hintText="Price"
	      type="number"
	      onChange={ (event, val) => this.payloadTransaction.price = val }
	    /><br />
	    <DatePicker hintText="Date" mode="landscape" 
	      onChange={ (event, val) => this.payloadTransaction.date = val }
	    />
    	  </Dialog>
    	</div>
    )
  }
};

export default CurrencyActions;
