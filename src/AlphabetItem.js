import React, { Component } from "react";

class AlphabetItem extends Component {
  componentDidMount() {
    this.props.registerPos(this.props.id, this.fix.offsetTop);
  }
  render() {
    const { id, suffix } = this.props;
    return (
      <div
        className="alphabet-group"
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
          className="alphabet-group-title"
        >
          {`${id}${suffix}`}
        </div>
        <div
          style={{
            marginTop: 4,
            marginBottom: 8,
          }}
          className="alphabet-group-children-wrapper"
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default AlphabetItem;
