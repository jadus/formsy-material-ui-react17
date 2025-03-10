'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyComponent = function (_React$Component) {
  _inherits(FormsyComponent, _React$Component);

  function FormsyComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyComponent.__proto__ || Object.getPrototypeOf(FormsyComponent)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FormsyComponent;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.setMuiComponentAndMaybeFocus = function (c) {
    if (c === _this2.muiComponent) return;

    _this2.muiComponent = c;

    if (c && typeof c.focus === 'function') {
      _this2.focus = function () {
        return c.focus();
      };
    } else if (_this2.hasOwnProperty('focus')) {
      delete _this2.focus;
    }
  };

  this.debounce = function (fn, delay) {
    var timeout = void 0;
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn.apply(_this2, args);
      }, delay);
    };
  };
};

exports.default = FormsyComponent;