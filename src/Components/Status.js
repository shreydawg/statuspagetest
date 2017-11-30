import React, { Component } from "react";
import {Panel,Well} from 'react-bootstrap';

class Status extends Component {
render() {
return (
<div className="row">
                            <div className="col-md-10  col-md-offset-1">
    <Panel header="Current Status">
     Welcome to the new TTS status page, bringing you real-time information on service availability. If you are experiencing a technology outage or issue that is not reflected here, you can get help via the SPOT to report your incident. For more information please see our wiki page or hit us up in HipChat @TTS Status Page.
      <br /><br /><Well>No system is reporting an issue</Well>
    </Panel>
    </div>
    </div>
  );
  }
}

 export default Status;