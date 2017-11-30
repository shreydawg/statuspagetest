import React, { Component } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Status from "./Status";
import Planned from "./Planned";
import Table from "./TableTwo";

class Main extends Component {
  render() {
    return (
    		<div className="container-fluid">
                                <Header/>
                                <div className="row">
            					<div className="col-md-6">Home/ TTS Status Page</div>
            					<SearchBar/>
                            </div>
                            <Status/>
                            <Planned/>
                            <Table/>

            </div>

    );
  }
}


export default Main;