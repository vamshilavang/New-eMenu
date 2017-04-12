import React, { Component } from 'react';
import Accordion from './Accordian/eData';

export default class eMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
    }
  }
  toggleACC() {
    this.setState({ active: !this.state.active })
  }
  

  render() {
    return (
      <div>
        <Accordion header='eMenu' toggleACC={this.toggleACC.bind(this)} active={this.state.active} />
      </div>
    );
  }
}
