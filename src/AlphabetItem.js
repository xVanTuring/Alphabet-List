import React, { Component } from "react";

class AlphabetItem extends Component {
  componentDidMount() {
    this.props.registerPos(this.props.id, this.fix.offsetTop);
  }
  render() {
    const { id, suffix } = this.props;
    return (
      <div
        style={{
          textAlign: "left",
        }}
        ref={(ref) => {
          this.fix = ref;
        }}
      >
        <div
          style={{
            color: "white",
          }}
        >
          {`${id}${suffix}`}
        </div>
        <div
          style={{
            marginTop: 4,
            marginBottom: 8,
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default AlphabetItem;
