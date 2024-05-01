/* eslint-disable no-param-reassign */

import { Logger } from "../Utils/Logger";
import DataCenter from "../Utils/DataCenter";
import ElementManger from "./ELementManager";
import { HTMLElementBuilder } from "./HTMLElementBuilder";

/* eslint-disable no-unused-vars */
export default class InputValidator {
  /**
   *
   * @param {HTMLInputElement} input The input element to validate
   */
  constructor(input, string = "") {
    if (this.checkInstance(input)) {
      this.input = input;
    } else {
      if (string === "create") {
        this.input = HTMLElementBuilder.create("input");
      } else Logger.inputTypeError();
    }
  }
  /**
   *
   * @returns input value
   */
  getValue() {
    return this.input.value;
  }
  /**
   *
   * @returns the processed input element
   */
  getElement() {
    return this.input;
  }
  /**
   *
   * @param {HTMLInputElement} input
   * @returns true | false
   */
  checkInstance(input) {
    if (input instanceof HTMLInputElement) return true;
    return false;
  }

  /**
   *
   * @param {HTMLInputElement} input set "required" attribute to the input
   */
  setRequired() {
    this.input.required = !this.input.required;
    return this;
  }

  /**
   *
   * @param {Array} suggestions the array of suggestions to suggest
   * You can style the elements by selecting the id, classes of the suggestions elements
   * Default selectors:
   * the whole container as ID : ${input.id}-suggestion-container
   * the list items as class : suggestion-items
   */
  setAutoComplete(suggestions) {
    if (Array.isArray(suggestions)) {
      this.input.addEventListener("input", (e) => {
        const removeDiv = ElementManger.byId(
          `${this.input.id}-suggestion-container`
        );
        if (removeDiv) removeDiv.parentNode.removeChild(removeDiv);

        let relevant = suggestions.filter((sugg) =>
          sugg.toLowerCase().includes(this.input.value.toLowerCase())
        );
        const container = new HTMLElementBuilder("div")
          .setId(`${this.input.id}-suggestion-container`)
          .build();
        for (let suggestion of relevant) {
          this.input.autocomplete = suggestion;
          const items = new HTMLElementBuilder("div")
            .setClass("suggestion-items")
            .setText(suggestion)
            .build();
          items.style.width = this.input.clientWidth + "px";
          container.appendChild(items);
        }
        container.addEventListener("click", (e) => {
          if (e.target.classList.contains("suggestion-items")) {
            this.input.value = e.target.textContent;
            container.parentNode.removeChild(container);
          }
        });
        this.input.addEventListener("blur", () => {
          setTimeout(() => {
            container.style.display = "none";
          }, 200);
        });
        this.input.parentNode.appendChild(container);
      });
    }
    return this;
  }
  /**
   *
   * @param {String} message the text to display on error
   */
  setErrorMessage(message) {
    this.input.setCustomValidity(message);
    return this;
  }
  /**
   *
   * @returns true|false
   */
  checkEmailValidiy() {
    const validity = !!String(this.input.value)
      .toLowerCase()
      .match(DataCenter.email());
    if (validity) {
      this.setErrorMessage("");
      return validity;
    }
    return false;
  }
  /**
   *
   * @param {EventListenerOptions} type How to
   * @param {*} callbackFn
   * @returns
   */
  addListener(type, callbackFn) {
    this.input.addEventListener(type, (e) => callbackFn(e));
    return this;
  }
  /**
   *
   * @param {String} country country name
   * @param {String} zipcode zip code
   * @returns exact zipcode if valid else return an array of note and format with index respectively
   */
  checkZipCode(country, zipcode) {
    const data = DataCenter.zipCode(country);
    if (data && String(zipcode).match(data.Regex)) {
      return zipcode;
    } else {
      return [data.Note, data.Format];
    }
  }
  /**
   *
   * @param {HTMLInputElement} input1 first input
   * @param {HTMLInputElement} input2 second input
   * @returns true | false
   */
  passwordConfirm(input1, input2) {
    return input1 === input2;
  }
}
