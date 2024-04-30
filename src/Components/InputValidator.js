/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
export default class InputValidator {
  /**
   *
   * @param {HTMLInputElement} input The input element to validate
   */
  constructor(input) {
    if (input instanceof HTMLInputElement) {
      this.input = input;
    } else {
      throw new Error("Can't use non-input element");
    }
  }

  build() {
    return this.input;
  }
  /**
   *
   * @param {HTMLInputElement} input
   * @returns true | false
   */
  static checkInstance(input) {
    if (input instanceof HTMLInputElement) return true;
    return false;
  }

  /**
   *
   * @param {HTMLInputElement} input set "required" attribute to the input
   */
  static setRequired(input) {
    if (this.checkInstance(input)) {
      input.required = !input.required;
    }
  }
}
