'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AlphabetItem = require('./AlphabetItem');

var _AlphabetItem2 = _interopRequireDefault(_AlphabetItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapArrToMap = function mapArrToMap(arr) {
  var map = new Map();
  var Regx = /^[A-Za-z]$/;
  arr.forEach(function (item) {
    var firstChar = item[0];
    if (!Regx.test(firstChar)) {
      firstChar = '#';
    } else {
      firstChar = firstChar.toUpperCase();
    }
    if (map.get(firstChar) == null) {
      map.set(firstChar, [item]);
    } else {
      var _arr = map.get(firstChar);
      _arr.push(item);
      map.set(firstChar, _arr);
    }
  });
  return map;
};

var AlphabetList = function (_Component) {
  _inherits(AlphabetList, _Component);

  function AlphabetList(props) {
    _classCallCheck(this, AlphabetList);

    var _this = _possibleConstructorReturn(this, (AlphabetList.__proto__ || Object.getPrototypeOf(AlphabetList)).call(this, props));

    _this.registerPos = function (id, top) {
      if (_this.mapPos) {
        _this.mapPos.set(id, top);
      }
    };

    _this.handleAlphaClick = function (char) {
      _this.scroller.scrollTop = _this.mapPos.get(char);
    };

    _this.mapPos = null;
    return _this;
  }

  _createClass(AlphabetList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          generateFn = _props.generateFn,
          style = _props.style,
          data = _props.data,
          className = _props.className;

      var map = mapArrToMap(data);
      this.mapPos = new Map();
      var keyArr = Array.from(map.keys());
      keyArr.sort();
      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: _extends({
            position: 'absolute'
          }, style ? style : {})
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              width: '100%',
              height: '100%',
              overflow: 'auto',
              paddingRight: 12
            },
            ref: function ref(_ref) {
              _this2.scroller = _ref;
            }
          },
          keyArr.map(function (char) {
            if (map.get(char) != null) {
              return _react2.default.createElement(
                _AlphabetItem2.default,
                {
                  id: '' + char,
                  suffix: ' (' + map.get(char).length + ')',
                  key: char,
                  registerPos: _this2.registerPos
                },
                map.get(char).map(function (item, index) {
                  return generateFn(item, index);
                })
              );
            }
          })
        ),
        _react2.default.createElement(
          'div',
          {
            style: {
              position: 'absolute',
              top: 12,
              right: 12,
              color: '#AAA'
            }
          },
          keyArr.map(function (item) {
            return _react2.default.createElement(
              'div',
              {
                key: item,
                style: {
                  fontSize: 9.5,
                  verticalAlign: 'top',
                  cursor: 'pointer',
                  color: '#AAA'
                },
                onClick: function onClick() {
                  _this2.handleAlphaClick(item);
                }
              },
              item
            );
          })
        )
      );
    }
  }]);

  return AlphabetList;
}(_react.Component);

exports.default = AlphabetList;