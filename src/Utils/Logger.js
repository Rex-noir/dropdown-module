/* eslint-disable import/prefer-default-export */
export class Logger {
  static throwError(text) {
    throw new Error(text);
  }
  static inputTypeError() {
    this.throwError("Expected an input element");
  }
  static minLengthError() {
    this.throwError("Minimun length not satisfied!");
  }
  static maxLengthError() {
    this.throwError("Maximum length reached!");
  }
  static countryNotfound() {
    this.throwError("Country not found!");
  }
  static zipCodeError() {
    this.throwError("Invalid zip code!");
  }
}
