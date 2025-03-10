'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _FormsyComponent2 = require('./FormsyComponent');

var _FormsyComponent3 = _interopRequireDefault(_FormsyComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyTime = function (_FormsyComponent) {
  _inherits(FormsyTime, _FormsyComponent);

  function FormsyTime() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyTime);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyTime.__proto__ || Object.getPrototypeOf(FormsyTime)).call.apply(_ref, [this].concat(args))), _this), _this.timesEq = function (date1, date2) {
      return date1.getHours() === date2.getHours() && date1.getMinutes() === date2.getMinutes();
    }, _this.handleChange = function (event, value) {
      _this.props.setValue(value);
      if (_this.props.onChange) _this.props.onChange(event, value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyTime, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultTime = this.props.defaultTime;

      var value = this.props.getValue();

      if (typeof value === 'undefined' && typeof defaultTime !== 'undefined') {
        this.props.setValue(defaultTime);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.value) {
        if (!this.props.value || !this.timesEq(this.props.value, newProps.value)) {
          this.props.setValue(newProps.value);
        }
      } else if (!this.props.value && newProps.defaultTime) {
        if (!this.timesEq(this.props.defaultTime, newProps.defaultTime)) {
          this.props.setValue(newProps.defaultTime);
        }
      }
    }

    /**
     * Check time equality by hours and minutes
     * @param {Date} date1
     * @param {Date} date2
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultTime = _props.defaultTime,
          getErrorMessage = _props.getErrorMessage,
          getErrorMessages = _props.getErrorMessages,
          getValue = _props.getValue,
          hasValue = _props.hasValue,
          innerRef = _props.innerRef,
          isFormDisabled = _props.isFormDisabled,
          isFormSubmitted = _props.isFormSubmitted,
          isPristine = _props.isPristine,
          isRequired = _props.isRequired,
          isValid = _props.isValid,
          isValidValue = _props.isValidValue,
          resetValue = _props.resetValue,
          setValidations = _props.setValidations,
          setValue = _props.setValue,
          showError = _props.showError,
          showRequired = _props.showRequired,
          validationError = _props.validationError,
          validationErrors = _props.validationErrors,
          validations = _props.validations,
          rest = _objectWithoutProperties(_props, ['defaultTime', 'getErrorMessage', 'getErrorMessages', 'getValue', 'hasValue', 'innerRef', 'isFormDisabled', 'isFormSubmitted', 'isPristine', 'isRequired', 'isValid', 'isValidValue', 'resetValue', 'setValidations', 'setValue', 'showError', 'showRequired', 'validationError', 'validationErrors', 'validations']);

      return _react2.default.createElement(_TimePicker2.default, _extends({
        disabled: isFormDisabled()
      }, rest, {
        errorText: getErrorMessage(),
        onChange: this.handleChange,
        ref: this.setMuiComponentAndMaybeFocus,
        value: getValue()
      }));
    }
  }]);

  return FormsyTime;
}(_FormsyComponent3.default);

FormsyTime.propTypes = {
  defaultTime: _propTypes2.default.object,
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func,
  validationError: _propTypes2.default.string,
  validationErrors: _propTypes2.default.object,
  validations: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  value: _propTypes2.default.object
};
exports.default = (0, _formsyReact.withFormsy)(FormsyTime);