import React, { Component } from "react";

export default class Table extends Component {
     constructor(props){
          super(props);
     this.state = {
          data: [
          {'id':1,1:'',2:'Friday',3:'Saturday',4:'Sunday',5:'Monday',6:'Tuesday',7:'Wednesday'},
          {'id':2,1:'Enterprise Content and Collaboration',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
          {'id':3,1:'Enterprise Risk,Assets Protectio n,Security,Legal',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
          {'id':4,1:'Finance',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
          {'id':5,1:'Human Resources',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
          {'id':6,1:'Indirect Sourcing and Procurement',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'}
     ],
     errorInput:''
     };
      this.submitStepSignupForm = this.submitStepSignupForm.bind(this);
      this.appendColumn = this.appendColumn.bind(this);
     //  this.editColumn = this.editColumn.bind(this);
}

     submitStepSignupForm(id,value){
          console.log(this.props,'signup4');
            let newArray = this.state.data.slice();
            newArray.push({'id':id,'value':value});
          this.setState({col : newArray});
     }

     // append column to the HTML table
      appendColumn() {
               let obj =  this.state.data.map((p) => {
                    let size = Object.keys(p).length;
                    p[size+1] = '-';
                    return p;
               });
               this.setState({data:obj});
           }
     // edit Column
      editColumn(p,k,e) {
         let inputValue = e.target.innerText;
           let obj = p.p;
          let objId = obj.id;
          let position = k.k;
          let values = Object.values(obj);
          if(values.indexOf(inputValue) == -1){
               obj[position] = inputValue;
               let stateCopy = this.state.data;
               stateCopy.map((object,index) =>{
                    if(object.id == objId){
                         object = obj[position];
                    }
               })
               this.setState(stateCopy);
               this.setState({errorInput:''});
               console.log(stateCopy,'stateCopystateCopy');
          }else{
               this.setState({errorInput:'This period is also available in your list'});
               return false;
          }
           }

     render(){
          let tableStyle = {
               align:"center"
          };
          let list = this.state.data.map(p =>{
               return (
                    <tr className="grey2" key={p.id}>
                         {Object.keys(p).filter(k => k !== 'id').map(k => {
                               return (<td className="grey1" key={p.id+''+k}><div suppressContentEditableWarning="true" contentEditable="true"
                              value={k} onInput={this.editColumn.bind(this,{p},{k})}>{p[k]}</div></td>);
                         })}
                    </tr>
               );
          });
          return (
          <div className="row">
                <div className="col-md-6">
               <fieldset className="step-4">
                    <div className="schedule padd-lr">
                         <table cellSpacing="3" id="mytable" style={tableStyle}>
                              <tbody>{list}</tbody>
                         </table>

                    </div>
               </fieldset>
               </div>
               </div>
          );
     }
}


