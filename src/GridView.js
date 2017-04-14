import React from 'react';
var axios = require('axios');
 

class GridView extends React.Component {

   constructor(props){

    super(props);

    this.updatePayment = this.updatePayment.bind(this);
    this.updateMonthCount = this.updateMonthCount.bind(this);
    this.getInitialValues = this.getInitialValues.bind(this); 
    this.setInitialValues = this.setInitialValues.bind(this); 

    this.getInitialValues();
    this.state = {
      optionDtls : this.props.optType,
      financialInfo: {},
      isLoading: true
    }
  }

  updateMonthCount(event){

    let updatedPayment = parseInt(this.state.rate) * parseInt(event.target.value);
    this.setState({monthCount:event.target.value, totalPayment: updatedPayment})
   }

  updatePayment(event){
    console.log('Cpounter Updated mode', this.state.monthCount , event.target.value);
    let updatedPayment = parseInt(this.state.monthCount) * parseInt(event.target.value);
    this.setState({rate: event.target.value, totalPayment: updatedPayment});
   }

   getInitialValues(){
    var that = this;
    axios.get('http://localhost:3333/src/mockAPI/financialInfo.json').then(function(res){
        console.log('Result', res);
        var financialInfo = res.data; 
        that.setInitialValues(financialInfo);
    })
   }
   setInitialValues(fInfo){
    console.log('FINof', fInfo);
      this.setState({
        financialInfo: fInfo,
        isLoading: false
      });
      console.log('Full State', this.state)
   }

  render() {

    let dtls = this.state;
    return (
    <div className="col-md-3 col-sm-3 col-xs-12">
      {
        !dtls.isLoading  ?
        <div className="r-panel">
          <h4> {dtls.optionDtls.name !== 'option 1' ? <input type="checkbox" name={dtls.optionDtls.name} readOnly="true" /> : null } {dtls.optionDtls.name} </h4>
          
          <div className="lessPad">
          <label>Term</label>
          <div className="input-group default-margin-tp-btm cus-input lessPad">
            <input type="text" className="form-control borderd hfit" defaultValue = {dtls.optionDtls.position === 1 ? dtls.financialInfo.term : (dtls.financialInfo.term + (12 * (parseInt(dtls.optionDtls.position) - 1))) }/>
          </div>

          </div>

           <label>Rate</label>
          <div className="input-group default-margin-tp-btm cus-input lessPad">
            <input type="text" className="form-control" defaultValue = {dtls.optionDtls.position === 1 ? dtls.financialInfo.apr : '' } aria-describedby="sizing-addon2" />
            <span className="input-group-addon" id="sizing-addon2">%</span>
          </div>

           <label>Payment</label>
          <div className="input-group default-margin-tp-btm cus-input cus-payment lessPad">
           <span className="input-group-addon cus-addon" id="sizing-addon2">$</span>

            <input type="text" className="form-control" defaultValue = {dtls.optionDtls.position === 1 ? dtls.financialInfo.monthly_payment : '' } />

          </div>

        </div>
        : <h3> Loading Info...</h3>
      }

        </div>

)

}

}

 

export default GridView;