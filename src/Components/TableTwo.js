import React, { Component } from 'react';
import {Icon} from 'react-fa';
import {Panel} from 'react-bootstrap';

class Table extends Component {
constructor(){
     super()
       this.state = {
   portfolio:[{
   "name":"Corporate Systems",
   "productgroupings":[{"name":"Enterprise Content and Collaboration","monday":"no","tuesday":"yes","wednesday":"yes",thursday:"yes",friday:"yes"},{name:"Enterprise Risk, Assets Protection,Security,Legal","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Finance","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Human Resources","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Indirect Sourcing and Procurement","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Properties","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"SAP Platform Engineering","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Supplier Management","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   },{
   "name":"Digital",
   "productgroupings":[{"name":"Digital Solutions","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Enterprise Price and Promo","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Fulfill","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Guest Experience Management","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Guest Web Experience","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Mobile Apps","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Personalization","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Search and Listing Pages","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Transact/Connect","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   },
   {
   "name":"Enterprise Data Analytics and Business Intelligence",
   "productgroupings":[{"name":"Business Intelligence and Analytics","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Business Intelligence Engineering","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Data Science and Engineering","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Data Strategy and governance","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Testing and Measurement","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   },
   {
   "name":"Financial and Retail Services",
   "productgroupings":[{"name":"Payments","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"REDcards","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Service Centers","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   },
   {
   "name":"Infrastructure and Operations",
   "productgroupings":[{"name":"Cloud and Compute","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Connectivity","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Operations","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Rollout and Deployment","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Tools to do the job","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   },
   {
    "name":"Marketing",
    "productgroupings":[{"name":"Creative Content","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Digital Media Marketing","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Guest Data Management","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Loyalty","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Marketing systems","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   },
   {
    "name":"Merchandising",
    "productgroupings":[{"name":"Merchandising","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   },
   {
   "name":"Security",
   "productgroupings":[{"name":"Identity and Access Management Engineering","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Information Security","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Security Platform Engineering","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   },
   {
   "name":"Stores",
   "productgroupings":[{"name":"Point of Sale","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Sales Floor and Retail Operations","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Store Replenishment","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   },
   {
   "name":"Supply Chain",
   "productgroupings":[{"name":"GJ","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Inventory Allocation and Replenishment","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Platform Management","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Supply Chain Run State","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"},{"name":"Transportation","monday":"yes","tuesday":"yes","wednesday":"yes","thursday":"yes","friday":"yes"}]
   }
   ]
       }
       }
       onHandleProductClick(product){
       console.log("product"+product.name);
       this.setState({

       })
       }

         onDisplayIcon(product){
              console.log("product"+product.monday);

              }


render() {
return (
       <div className="row">
       <div className="col-md-3 pull-right">
        <Panel className="panelhead" header="Legend">
           <div><Icon name="check-circle" className="icon-circle" /> No issues</div>
           <div><Icon name="info-circle" className="icon-infocircle" /> Planned maintenance</div>
           <div><Icon name="minus-circle" className="icon-minuscircle" /> Service degradation</div>
           <div><Icon name="exclamation-circle" className="icon-excircle" /> Outage</div>
           <div><Icon name="plus-circle" className="icon-pluscircle" /> Multiple issues</div>
           </Panel>
       </div>
       {this.state.portfolio.map((portfolios, i) => {
          return <div className="col-md-7 col-md-offset-1" key={i}>
              <table className="table">
              <thead  className="tableHeader">
              <tr>
              <th className="col-md-12">{portfolios.name}</th>
              <th className="col-md-1" >Mon</th>
              <th className="col-md-1" >Tue</th>
              <th className="col-md-1" >Wed</th>
              <th className="col-md-1" >Thur</th>
              <th className="col-md-1" >Fri</th>
              </tr>
              </thead>
              <tbody>{portfolios.productgroupings.map((product, j) =>{
              return (
                     <tr key = {j}>
                     <td><Icon name="square-o" className="icon-square" /><a href="#" style={{textDecoration: 'none'}} product={product} onClick={this.onHandleProductClick.bind(this, product)}> {product.name}</a></td>
                     <td product={product} onClick={this.onDisplayIcon.bind(this, product)}><Icon name="check-circle" className="icon-circle" /></td>
                     <td><Icon name="check-circle" className="icon-circle" /></td>
                     <td><Icon name="check-circle" className="icon-circle" /></td>
                     <td><Icon name="check-circle" className="icon-circle" /></td>
                     <td><Icon name="check-circle" className="icon-circle" /></td>
                     </tr>
                     )
              })}</tbody>
              </table>
              </div>

    })}</div>
    );

}
}

export default Table;
