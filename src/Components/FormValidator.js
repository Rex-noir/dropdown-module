/* eslint-disable import/prefer-default-export */

export class FormValidator {
  /**
   *
   * @param  {...any} inputs inputs to set required symbol
   */
  static setrequired(...inputs) {
    inputs.forEach((value) => {
      const input = value;
      input.required = true;
    });
  }

  /**
   *
   * @param {HTMLElement} input the input element to set pattern
   * @param {RegExp} regex the pattern to match; Regex or string
   */
  static setValidatePattern(input, regex) {
    const element = input;
    element.setAttribute("pattern", this.regexToString(regex));
  }

  static regexToString(regex) {
    const pattern = regex.replace("/", "");
    return pattern;
  }

  /**
   *
   * @param {HTMLElement} input input to set the pattern
   */
  static setMailValidationPattern(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.setValidatePattern(input, emailRegex);
  }

  /**
   *
   * @param {HTMLElement} input Input element to get length
   * @returns
   */
  static getLength(input) {
    return input.value.length;
  }

  /**
   *
   * @param {HTMLElement} input The Input element
   * @param {Number} minLength The minimun number
   * @param {Number} maxLength The maximum number
   * @returns
   */
  static validateLength(input, minLength, maxLength) {
    const length = this.getLength(input);
    if (length < minLength || length > maxLength) {
      return false;
    }
    return true;
  }

  /**
   *
   * @param {value} arg1 The first argument
   * @param {value} arg2 The second argument
   * @returns true if both arguments are the same
   */
  static confirmValidation(arg1, arg2) {
    return arg1 === arg2;
  }
}
