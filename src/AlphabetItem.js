import React, { Component } from 'react';


class AlphabetItem extends Component {
  componentDidMount() {
    this.props.registerPos(this.props.id, this.fix.offsetTop)
  }
  render() {
    const { id, subfix } = this.props
    return (
      <div
        style={{
          textAlign: 'left',
          marginTop: 8
        }}
        ref={(ref) => { this.fix = ref }}
      >
        <div
          style={{
            color: 'white',
          }}>
          {`${id}${subfix}`}
        </div>
        <div
          style={{
            marginTop: 4
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default AlphabetItem;