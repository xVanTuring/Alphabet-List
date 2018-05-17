'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlphabetItem = function (_Component) {
  _inherits(AlphabetItem, _Component);

  function AlphabetItem() {
    _classCallCheck(this, AlphabetItem);

    return _possibleConstructorReturn(this, (AlphabetItem.__proto__ || Object.getPrototypeOf(AlphabetItem)).apply(this, arguments));
  }

  _createClass(AlphabetItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.registerPos(this.props.id, this.fix.offsetTop);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          subfix = _props.subfix;

      return _react2.default.createElement(
        'div',
        {
          style: {
            textAlign: 'left'
          },
          ref: function ref(_ref) {
            _this2.fix = _ref;
          }
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              color: 'white'
            } },
          '' + id + subfix
        ),
        _react2.default.createElement(
          'div',
          {
            style: {
              marginTop: 4,
              marginBottom: 8
            }
          },
          this.props.children
        )
      );
    }
  }]);

  return AlphabetItem;
}(_react.Component);

exports.default = AlphabetItem;