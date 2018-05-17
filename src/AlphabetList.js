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
    this.map = mapArrToMap(this.props.data);
    this.mapPos = new Map();
    this.state = {
      currentChar: '#'
    }
    this.posKeyArr = null
  }
  registerPos = (id, top) => {
    this.mapPos.set(id, top);
  }
  handleScroll = () => {
    if (this.posKeyArr == null) {
      this.posKeyArr = Array.from(this.mapPos.keys());
      this.posKeyArr.sort();
    }
    let currentChar = '#';
    if (this.scroller != null) {
      // TODO: better calc
      this.posKeyArr.forEach((key) => {
        if (this.scroller.scrollTop + 16 >= this.mapPos.get(key)) {
          currentChar = key;
        }
      })
    }
    if (currentChar !== this.state.currentChar) {
      this.setState({
        currentChar: currentChar
      })
    }
  }
  handleAlphaClick = (char) => {
    this.scroller.scrollTop = this.mapPos.get(char)
  }
  render() {
    const { generateFn } = this.props;
    const keys = Array.from(this.map.keys())
    keys.sort();
    return (
      <div
        style={{
          position: 'relative',
          width: 350,
          height: 400,
        }}
      >
        <div
          style={{
            width: 350,
            height: 400,
            backgroundColor: '#333',
            overflow: 'scroll',
            overflowX: 'hidden',
            paddingRight: 12,
            paddingLeft: 8
          }}
          ref={(ref) => { this.scroller = ref }}
          onScroll={this.handleScroll}
        >
          {
            keys.map((char) => {
              if (this.map.get(char) != null) {
                return (
                  <AlphabetItem
                    id={`${char}`}
                    subfix={` (${this.map.get(char).length})`}
                    key={char}
                    registerPos={this.registerPos}
                  >
                    {
                      this.map.get(char).map((item, index) => {
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
            right: 8,
            color: '#AAA'
          }}
        >
          {
            keys.map(item => {
              return (
                <div
                  key={item}
                  style={{
                    fontSize: 9.5,
                    verticalAlign: 'top',
                    cursor: 'pointer',
                    color: this.state.currentChar === item ? 'white' : '#AAA'
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
