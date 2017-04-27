import React from 'react';

export default React.createClass({
  render() {
    console.log("props : ", this.props);
    const id = this.props.match.params.id;
    return (
      <div>
        <h3>Hello mother fucker</h3>
        <h2>{this.props.match.params.id}</h2>
        <h2>{id}</h2>
      </div>
    )
  }
})
