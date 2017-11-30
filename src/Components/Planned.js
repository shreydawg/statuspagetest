import React, { Component } from "react";
import {Panel,Accordion,Well} from 'react-bootstrap';


class Planned extends Component {
constructor(...args) {
    super(...args);
    this.state = {
      open: true,
    };
  }
render() {
return (
<div className="row">
<div className="col-md-10  col-md-offset-1">
 <Accordion>
<Panel header="Planned" eventKey="1">
     <Well>No system planned a issue an issue</Well>
    </Panel>
     </Accordion>
     </div>
     </div>
  );
  }
}

export default Planned;