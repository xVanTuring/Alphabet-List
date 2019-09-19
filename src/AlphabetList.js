import React, { Component } from 'react';
import AlphabetItem from './AlphabetItem';

const mapArrToMap = (arr) => {
  const map = new Map();
  var Regx = /^[A-Za-z]$/;
  arr.forEach((item) => {
    let firstChar = item[0];
    if (!Regx.test(firstChar)) {
      firstChar = '#'
    } else {
      firstChar = firstChar.toUpperCase();
    }
    if (map.get(firstChar) == null) {
      map.set(firstChar, [item]);
    } else {
      const arr = map.get(firstChar);
      arr.push(item);
      map.set(firstChar, arr)
    }

  })
  return map;
}
class AlphabetList extends Component {
  constructor(props) {
    super(props);
    this.mapPos = null;
  }
  registerPos = (id, top) => {
    if (this.mapPos) {
      this.mapPos.set(id, top);
    }
  }
  handleAlphaClick = (char) => {
    this.scroller.scrollTop = this.mapPos.get(char)
  }
  render() {
    const { generateFn, style, data, className } = this.props;
    const map = mapArrToMap(data);
    this.mapPos = new Map();
    const keyArr = Array.from(map.keys())
    keyArr.sort();
    return (
      <div
        className={className}
        style={{
          position: 'absolute',
          ...(style ? style : {})
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            paddingRight: 12,
          }}
          ref={(ref) => { this.scroller = ref }}
        >
          {
            keyArr.map((char) => {
              if (map.get(char) != null) {
                return (
                  <AlphabetItem
                    id={`${char}`}
                    suffix={` (${map.get(char).length})`}
                    key={char}
                    registerPos={this.registerPos}
                  >
                    {
                      map.get(char).map((item, index) => {
                        return generateFn(item, index);
                      })
                    }
                  </AlphabetItem>
                )
              }
            })
          }

        </div>
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            color: '#AAA'
          }}
        >
          {
            keyArr.map(item => {
              return (
                <div
                  key={item}
                  style={{
                    fontSize: 9.5,
                    verticalAlign: 'top',
                    cursor: 'pointer',
                    color: '#AAA'
                  }}
                  onClick={() => { this.handleAlphaClick(item) }}
                >
                  {item}
                </div>
              )
            })
          }
        </div>
      </div>

    );
  }
}
export default AlphabetList;
