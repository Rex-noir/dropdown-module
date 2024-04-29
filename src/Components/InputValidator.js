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

  static checkInstance(input) {
    if (input instanceof HTMLInputElement) return true;
    return false;
  }

  static setRequired(input) {
    if (this.checkInstance(input)) {
      input.required = !input.required;
    }
  }
}
