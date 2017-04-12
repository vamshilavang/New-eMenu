import React from 'react';

class GridView extends React.Component {
   constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      optionDtls : this.props.optType
      // rate: 0,
      // totalPayment: 0,
      // monthCount: 0
    }
    this.updatePayment = this.updatePayment.bind(this);
    this.updateMonthCount = this.updateMonthCount.bind(this);

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
  render() {
    let dtls = this.state;
    console.log(dtls)
    return (
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="r-panel">

          <h3> {dtls.optionDtls.name !== 'option 1' ? <input type="checkbox" name={dtls.optionDtls.name}/> : null } {dtls.optionDtls.name} </h3>
          <div className="dropdown default-margin-tp-btm">
          <label>Term</label>
            
          <div className="input-group default-margin-tp-btm cus-input">
            <input type="text" className="form-control borderd" value={dtls.monthCount }  onChange={this.updateMonthCount}/>
          </div>

          </div>
           <label>Rate</label>
          <div className="input-group default-margin-tp-btm cus-input">
            <input type="text" className="form-control" value={dtls.rate} aria-describedby="sizing-addon2" onChange={this.updatePayment} />
            <span className="input-group-addon" id="sizing-addon2">%</span>
          </div>

           <label>Payment</label>
          <div className="input-group default-margin-tp-btm cus-input cus-payment">
           <span className="input-group-addon cus-addon" id="sizing-addon2">$</span>
            <input type="text" className="form-control" value={dtls.totalPayment}/>
          </div>
        </div>
        </div>
)
}
}

export default GridView;
