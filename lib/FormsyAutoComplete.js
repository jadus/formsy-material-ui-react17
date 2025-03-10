'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormsyAutoComplete = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _formsyReact = require('formsy-react');

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _FormsyComponent2 = require('./FormsyComponent');

var _FormsyComponent3 = _interopRequireDefault(_FormsyComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyAutoComplete = exports.FormsyAutoComplete = function (_FormsyComponent) {
  _inherits(FormsyAutoComplete, _FormsyComponent);

  function FormsyAutoComplete() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyAutoComplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyAutoComplete.__proto__ || Object.getPrototypeOf(FormsyAutoComplete)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.props.defaultValue || _this.props.value || ''
    }, _this.handleBlur = function (event) {
      _this.props.setValue(event.currentTarget.value);
      if (_this.props.onBlur) _this.props.onBlur(event);
    }, _this.handleChange = function (event) {
      _this.setState({
        value: event.currentTarget.value
      });
      if (_this.props.onChange) _this.props.onChange(event);
    }, _this.handleUpdateInput = function (value) {
      _this.setState({
        value: value
      });
      if (_this.props.onChange) _this.props.onChange(null, value);
    }, _this.handleKeyDown = function (event) {
      if ((0, _keycode2.default)(event) === 'enter') _this.props.setValue(event.currentTarget.value);
      if (_this.props.onKeyDown) _this.props.onKeyDown(event, event.currentTarget.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyAutoComplete, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.setValue(this.props.defaultValue || this.props.value || '');
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint no-unused-vars: 0 */
      var _props = this.props,
          defaultValue = _props.defaultValue,
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
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          required = _props.required,
          resetValue = _props.resetValue,
          setValidations = _props.setValidations,
          setValue = _props.setValue,
          showError = _props.showError,
          showRequired = _props.showRequired,
          validationError = _props.validationError,
          validationErrors = _props.validationErrors,
          validations = _props.validations,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'getErrorMessage', 'getErrorMessages', 'getValue', 'hasValue', 'innerRef', 'isFormDisabled', 'isFormSubmitted', 'isPristine', 'isRequired', 'isValid', 'isValidValue', 'onBlur', 'onChange', 'onFocus', 'required', 'resetValue', 'setValidations', 'setValue', 'showError', 'showRequired', 'validationError', 'validationErrors', 'validations', 'value']);

      return _react2.default.createElement(_AutoComplete2.default, _extends({
        disabled: isFormDisabled()
      }, rest, {
        errorText: getErrorMessage(),
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onUpdateInput: this.handleUpdateInput,
        onFocus: onFocus,
        onKeyDown: this.handleKeyDown,
        ref: this.setMuiComponentAndMaybeFocus,
        value: this.state.value
      }));
    }
  }]);

  return FormsyAutoComplete;
}(_FormsyComponent3.default);

FormsyAutoComplete.propTypes = {
  defaultValue: _propTypes2.default.any,
  name: _propTypes2.default.string.isRequired,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  validationError: _propTypes2.default.string,
  validationErrors: _propTypes2.default.object,
  validations: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  value: _propTypes2.default.any
};
exports.default = (0, _formsyReact.withFormsy)(FormsyAutoComplete);