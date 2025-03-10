'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormsyRadioGroup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _RadioButton = require('material-ui/RadioButton');

var _FormsyComponent2 = require('./FormsyComponent');

var _FormsyComponent3 = _interopRequireDefault(_FormsyComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyRadioGroup = exports.FormsyRadioGroup = function (_FormsyComponent) {
  _inherits(FormsyRadioGroup, _FormsyComponent);

  function FormsyRadioGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyRadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyRadioGroup.__proto__ || Object.getPrototypeOf(FormsyRadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.handleValueChange = function (event, value) {
      _this.props.setValue(value);
      if (_this.props.onChange) _this.props.onChange(event, value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyRadioGroup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setValue(this.muiComponent.getSelectedValue());
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint no-unused-vars: 0 */
      var _props = this.props,
          defaultSelected = _props.defaultSelected,
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
          rest = _objectWithoutProperties(_props, ['defaultSelected', 'getErrorMessage', 'getErrorMessages', 'getValue', 'hasValue', 'innerRef', 'isFormDisabled', 'isFormSubmitted', 'isPristine', 'isRequired', 'isValid', 'isValidValue', 'required', 'resetValue', 'setValidations', 'setValue', 'showError', 'showRequired', 'validationError', 'validationErrors', 'validations', 'value']);

      // remove unknown props from children


      var children = _react2.default.Children.map(this.props.children, function (radio) {
        var _radio$props = radio.props,
            validations = _radio$props.validations,
            validationError = _radio$props.validationError,
            validationErrors = _radio$props.validationErrors,
            rest = _objectWithoutProperties(_radio$props, ['validations', 'validationError', 'validationErrors']);

        return _react2.default.createElement(_RadioButton.RadioButton, rest);
      });

      // For backward compatibility or for
      // users used to MaterialUI, use the "defaultSelected"
      // attribute for the "value" if the value was not
      // explicitly set.
      if (typeof value === 'undefined') {
        value = defaultSelected;
      }

      return _react2.default.createElement(
        _RadioButton.RadioButtonGroup,
        _extends({
          disabled: isFormDisabled()
        }, rest, {
          ref: this.setMuiComponentAndMaybeFocus,
          onChange: this.handleValueChange,
          valueSelected: getValue(),
          defaultSelected: value
        }),
        children
      );
    }
  }]);

  return FormsyRadioGroup;
}(_FormsyComponent3.default);

FormsyRadioGroup.propTypes = {
  children: _propTypes2.default.node,
  defaultSelected: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func,
  validationError: _propTypes2.default.string,
  validationErrors: _propTypes2.default.object,
  validations: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool])
};
exports.default = (0, _formsyReact.withFormsy)(FormsyRadioGroup);