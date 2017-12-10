import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';

class Statistics extends Component {
  render() {
    return (
	      <Paper zDepth={2} className="statistics container">
		<Grid fluid>
		<Row>
	    	  <Col lg={12}>
		    <div className="value">$1,000</div>
		    <div className="description">Current Portfolio Value</div>
		  </Col>
	    	</Row>
		<Row>
	    	  <Col lg={4}>
		    <div className="value">$1,000</div>
		    <div className="description">Total Cost</div>
		  </Col>
	    	  <Col lg={4}>
		    <div className="value">$1,000</div>
		    <div className="description">Total Profit (USD)</div>
		  </Col>
	    	  <Col lg={4}>
		    <div className="value">$1,000</div>
		    <div className="description">Total Profit (%)</div>
		  </Col>
	    	</Row>
		</Grid>
	      </Paper>
    )
  }
}

export default Statistics;
