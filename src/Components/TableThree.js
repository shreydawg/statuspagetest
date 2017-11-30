import React, { Component } from 'react';

class JsonToArray extends Component {
constructor(){
     super()
     this.state = {
     array:[],
     data:{"command":"SELECT","rowCount":10,"oid":null,"rows":[{"pid":101,"pName":"Corporate Systems","pgrouping":["Enterprise Content and Collaboration","Enterprise Risk, Assets Protection, Security, Legal","Finance","Human Resources","Indirect Sourcing and Procurement","Properties","SAP Platform Engineering","Supplier Management"]},{"pid":102,"pName":"Digital","pgrouping":["Digital Solutions","Enterprise Price and Promo","Fulfill","Guest Experience Management","Guest Web Experience","Mobile Apps","Personalization","Search and Listing Pages","Transact/Connect"]},{"pid":103,"pName":"Enterprise Data Analytics and Business Intelligence","pgrouping":["Business Intelligence and Analytics","Business Intelligence Engineering","Data Science And Engineering","Data Strategy And Governance","Testing And Measurement"]},{"pid":107,"pName":"Merchandising","pgrouping":["Merchandising"]},{"pid":106,"pName":"Marketing","pgrouping":["Creative Content","Digital Media Marketing","Guest Data Management","Loyalty","Marketing Systems"]},{"pid":105,"pName":"Infrastructure and Operations","pgrouping":["Cloud and Compute","Connectivity","Operations","Rollout and Deployment","Tools to do the Job"]},{"pid":104,"pName":"Financial and Retail Services","pgrouping":["Payments","REDcard","Service Centers"]},{"pid":110,"pName":"Supply Chain","pgrouping":["GJ","Inventory Allocation and Replenishment","Platform Management","Supply Chain Run State","Transportation"]},{"pid":109,"pName":"Stores","pgrouping":["Point of Sale","Sales Floor and Retail Operations","Store Replenishment"]},{"pid":108,"pName":"Security","pgrouping":["Identity and Access Management Engineering","Information Security","Security Platform Engineering"]}],"fields":[{"name":"pid","tableID":16456,"columnID":1,"dataTypeID":23,"dataTypeSize":4,"dataTypeModifier":-1,"format":"text"},{"name":"pName","tableID":16456,"columnID":2,"dataTypeID":1043,"dataTypeSize":-1,"dataTypeModifier":-1,"format":"text"},{"name":"pgrouping","tableID":16456,"columnID":3,"dataTypeID":1009,"dataTypeSize":-1,"dataTypeModifier":-1,"format":"text"}],"_parsers":[null,null,null],"rowAsArray":false}
     }
     }
     render() {
     var data = this.state.data;
     var array= this.state.array;
     data.rows.map((val,i) => {
     array.push(val);

     console.log("array::::::::::::::::::::"+array);
     });
     for(var j=0;j<array.length;j++){
        return( <div>{array[j].pName}</div>);
                 }
     }

     }


export default JsonToArray;
