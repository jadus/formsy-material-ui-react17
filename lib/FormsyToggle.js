'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormsyToggle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _FormsyComponent2 = require('./FormsyComponent');

var _FormsyComponent3 = _interopRequireDefault(_FormsyComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyToggle = exports.FormsyToggle = function (_FormsyComponent) {
  _inherits(FormsyToggle, _FormsyComponent);

  function FormsyToggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyToggle.__proto__ || Object.getPrototypeOf(FormsyToggle)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event, value) {
      _this.props.setValue(value);
      if (_this.props.onChange) _this.props.onChange(event, value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyToggle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setValue(this.muiComponent.isToggled());
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
          resetValue = _props.resetValue,
          setValidations = _props.setValidations,
          setValue = _props.setValue,
          showError = _props.showError,
          showRequired = _props.showRequired,
          validationError = _props.validationError,
          validationErrors = _props.validationErrors,
          validations = _props.validations,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'getErrorMessage', 'getErrorMessages', 'getValue', 'hasValue', 'innerRef', 'isFormDisabled', 'isFormSubmitted', 'isPristine', 'isRequired', 'isValid', 'isValidValue', 'resetValue', 'setValidations', 'setValue', 'showError', 'showRequired', 'validationError', 'validationErrors', 'validations']);

      var value = getValue();

      if (typeof value === 'undefined') {
        value = typeof defaultToggled !== 'undefined' ? defaultToggled : false;
      }

      return _react2.default.createElement(_Toggle2.default, _extends({
        disabled: isFormDisabled()
      }, rest, {
        onToggle: this.handleChange,
        ref: this.setMuiComponentAndMaybeFocus,
        toggled: value
      }));
    }
  }]);

  return FormsyToggle;
}(_FormsyComponent3.default);

FormsyToggle.propTypes = {
  defaultToggled: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func,
  validationError: _propTypes2.default.string,
  validationErrors: _propTypes2.default.object,
  validations: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
exports.default = (0, _formsyReact.withFormsy)(FormsyToggle);