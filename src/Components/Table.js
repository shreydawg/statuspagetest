import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Table extends Component {
  render() {
    const selectRow = {
      mode: 'checkbox',
      bgColor: 'pink',
      className: 'custom'
    };
  let products = 	[
  				{
  					"product": "Enterprise content and collaboration",
  					"monday" : "yes",
  					"tuesday": "yes",
  					"wednesday" : "yes",
                    "thursday": "yes",
                    "friday": "yes"
  				},
  				{
                  	"product": "Enterprise Risk,Assets Protection,Security,Legal",
                  	"monday" : "yes",
                  	"tuesday": "yes",
                  	"wednesday" : "yes",
                    "thursday": "yes",
                    "friday": "yes"
                  				}
  			];
    return (
    <div className="row">
    <div className="col-md-6  col-md-offset-1">
      <BootstrapTable data={ products } bordered={ false } selectRow={ selectRow }>
          <TableHeaderColumn dataField='product'isKey={ true }>Corporate Systems</TableHeaderColumn>
                   <TableHeaderColumn dataField='monday'>Mon</TableHeaderColumn>
                   <TableHeaderColumn dataField='tuesday'>Tue</TableHeaderColumn>
                   <TableHeaderColumn dataField='wednesday'>Wed</TableHeaderColumn>
                   <TableHeaderColumn dataField='thursday'>Thur</TableHeaderColumn>
                   <TableHeaderColumn dataField='friday'>Fri</TableHeaderColumn>
      </BootstrapTable>
      </div>
      </div>
    );
  }
}
export default Table;