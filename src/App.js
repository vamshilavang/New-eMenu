import React, { Component } from 'react';
import GridView from './gridView';
import Product from './productView';
import Emenu from './components/eMenu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      optionTypes: [
        { name: 'option 1' },
        { name: 'option 2' },
        { name: 'option 3' },
        { name: 'option 4' }
      ],
      optionArr: ['option1'],
      productsArr : [{imageUrl: 'http://mazaaq.net/dev/images_product/41458129.png', title: 'Service Contract', price: '$500.00', platinum: true, gold: true, silver: true, basic: false}, {imageUrl: '', title: 'Pre-Paid Maintenance/Key', price: '$450.00'}, {imageUrl: '', title: 'Total Loss Protection', price: '$250.00'}]
    }
  }
  render() {
    let options = this.state.optionTypes;
    let products = this.state.productsArr;
    return (
      <div>
        <Emenu />
        <hr />
        <h3>Term & Rate Options</h3>
        <div className="App">

          <div className="row">
            {
              [...options].map((option, i) =>
                <GridView key={i} optType={option} />

              )
            }
          </div>
          <button className="btn btn-lg pull-right btn-cus" type="button">get rates</button>
          <div>
        <h3 className="r-bottom-no-margin" key="productsHeading">Products</h3>
        <hr className="r-top-no-margin" />
            {
              products.map((product, i) => 
                <Product Key={"product_" + i.toString()} optType={product} />
              )
            }               
        </div>
        <div>
        {listProducts}
        </div>
        </div>
      </div>
    );
  }
}


var moreProductOptions = [{title: 'PLATINUM'}, {title: 'GOLD'}, {title: 'SILVER'},{title: 'BASIC'}],
listProducts =  moreProductOptions.map((moreProduct, index) =>
  <div className ="col-xs-3">
  <div className ="r-panel">
   <h3>{moreProductOptions.title}</h3>  
   <h6>Total Cost</h6>
   <div className="input-group default-margin-tp-btm">
    <span className="input-group-addon" id="sizing-addon2">$</span>
    <input type="text" className="form-control"/>
   </div>
   <h6>Total Price</h6>
   <div className="input-group default-margin-tp-btm">
    <span className="input-group-addon" id="sizing-addon2">$</span>
    <input type="text" className="form-control"/>
   </div>
  </div>
  </div>
);

export default App;

