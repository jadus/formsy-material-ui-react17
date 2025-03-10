'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormsyText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _formsyReact = require('formsy-react');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FormsyComponent2 = require('./FormsyComponent');

var _FormsyComponent3 = _interopRequireDefault(_FormsyComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyText = exports.FormsyText = function (_FormsyComponent) {
  _inherits(FormsyText, _FormsyComponent);

  /**
   *
   * @param {object} props
   */
  function FormsyText(props) {
    _classCallCheck(this, FormsyText);

    var _this = _possibleConstructorReturn(this, (FormsyText.__proto__ || Object.getPrototypeOf(FormsyText)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      value: _this.controlledValue()
    };
    return _this;
  }

  _createClass(FormsyText, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.setValue(this.controlledValue());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isValueChanging = nextProps.value !== this.props.value;
      if (isValueChanging || nextProps.defaultValue !== this.props.defaultValue) {
        var value = this.controlledValue(nextProps);
        var isValid = this.props.isValidValue(value);

        if (isValueChanging || this.props.defaultValue === this.props.getValue()) {
          this.setState({ value: value, isValid: isValid });
          if (this.props.getValue() !== value) this.props.setValue(value);
        }
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState._isPristine && // eslint-disable-line no-underscore-dangle
      nextState._isPristine !== this.state._isPristine) {
        // eslint-disable-line no-underscore-dangle
        // Calling state here is valid, as it cannot cause infinite recursion.
        var value = this.controlledValue(nextProps);
        var isValid = this.props.isValidValue(value);
        this.props.setValue(value);
        this.setState({ value: value, isValid: isValid });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint no-unused-vars: 0 */
      var _props = this.props,
          defaultValue = _props.defaultValue,
          convertValue = _props.convertValue,
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
          requiredError = _props.requiredError,
          setValidations = _props.setValidations,
          setValue = _props.setValue,
          showError = _props.showError,
          showRequired = _props.showRequired,
          underlineFocusStyle = _props.underlineFocusStyle,
          underlineStyle = _props.underlineStyle,
          updateImmediately = _props.updateImmediately,
          validationError = _props.validationError,
          validationErrors = _props.validationErrors,
          validations = _props.validations,
          validationColor = _props.validationColor,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'convertValue', 'getErrorMessage', 'getErrorMessages', 'getValue', 'hasValue', 'innerRef', 'isFormDisabled', 'isFormSubmitted', 'isPristine', 'isRequired', 'isValid', 'isValidValue', 'resetValue', 'requiredError', 'setValidations', 'setValue', 'showError', 'showRequired', 'underlineFocusStyle', 'underlineStyle', 'updateImmediately', 'validationError', 'validationErrors', 'validations', 'validationColor', 'value']);

      var isRequiredError = isRequired() && !isPristine() && !isValid() && isFormSubmitted() && requiredError;

      var errorText = getErrorMessage() || isRequiredError;

      return _react2.default.createElement(_TextField2.default, _extends({
        disabled: isFormDisabled()
      }, rest, {
        errorText: errorText,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        ref: this.setMuiComponentAndMaybeFocus,
        value: this.state.value,
        underlineStyle: this.state.isValid ? { borderColor: validationColor } : underlineStyle,
        underlineFocusStyle: this.state.isValid ? { borderColor: validationColor } : underlineFocusStyle
      }));
    }
  }]);

  return FormsyText;
}(_FormsyComponent3.default);

FormsyText.propTypes = {
  convertValue: _propTypes2.default.func,
  defaultValue: _propTypes2.default.any,
  name: _propTypes2.default.string.isRequired,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  requiredError: _propTypes2.default.string,
  underlineFocusStyle: _propTypes2.default.object,
  underlineStyle: _propTypes2.default.object,
  updateImmediately: _propTypes2.default.bool,
  validationColor: _propTypes2.default.string,
  validationError: _propTypes2.default.string,
  validationErrors: _propTypes2.default.object,
  validations: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  value: _propTypes2.default.any
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.controlledValue = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.props;
    return props.value || props.defaultValue || _this2.convertValue('');
  };

  this.handleBlur = function (event) {
    _this2.props.setValue(_this2.convertValue(event.currentTarget.value));
    delete _this2.changeValue;
    if (_this2.props.onBlur) _this2.props.onBlur(event);
  };

  this.handleChange = function (event) {
    // Update the value (and so display any error) after a timeout.
    if (_this2.props.updateImmediately) {
      if (!_this2.changeValue) {
        _this2.changeValue = _this2.debounce(_this2.props.setValue, 400);
      }
      _this2.changeValue(_this2.convertValue(event.currentTarget.value));
    } else {
      // If there was an error (on loss of focus) update on each keypress to resolve same.
      if (_this2.props.getErrorMessage() != null) {
        _this2.props.setValue(_this2.convertValue(event.currentTarget.value));
      } else {
        // Only update on valid values, so as to not generate an error until focus is lost.
        if (_this2.props.isValidValue(event.target.value)) {
          _this2.props.setValue(_this2.convertValue(event.currentTarget.value));
          // If it becomes invalid, and there isn't an error message, invalidate without error.
        }
      }
    }

    // Controlled component
    _this2.setState({
      value: event.currentTarget.value,
      isValid: _this2.props.isValidValue(event.currentTarget.value)
    });
    if (_this2.props.onChange) _this2.props.onChange(event, event.currentTarget.value);
  };

  this.handleKeyDown = function (event) {
    if ((0, _keycode2.default)(event) === 'enter') _this2.props.setValue(_this2.convertValue(event.currentTarget.value));
    if (_this2.props.onKeyDown) _this2.props.onKeyDown(event, event.currentTarget.value);
  };

  this.convertValue = function (value) {
    if (_this2.props.convertValue) {
      return _this2.props.convertValue(value);
    }
    return value;
  };
};

exports.default = (0, _formsyReact.withFormsy)(FormsyText);