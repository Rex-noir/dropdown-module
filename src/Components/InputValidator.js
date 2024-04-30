/* eslint-disable no-param-reassign */

import { Logger } from "../Utils/Logger";
import MyRegex from "../Utils/MyRegex";
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
    this.input.autocomplete = "on";
    if (Array.isArray(suggestions)) {
      this.input.addEventListener("input", (e) => {
        const removeDiv = ElementManger.byId(
          `${this.input.id}-suggestion-container`
        );
        if (removeDiv) removeDiv.parentNode.removeChild(removeDiv);
        let relevant = suggestions.filter((sugg) =>
          sugg.toLowerCase().startsWith(this.input.value.toLowerCase())
        );
        const container = new HTMLElementBuilder("div")
          .setId(`${this.input.id}-suggestion-container`)
          .build();
        for (let suggestion of relevant) {
          const items = new HTMLElementBuilder("div")
            .setClass("suggestion-items")
            .setText(suggestion)
            .addEvent("click", (e) => {
              this.input.value = items.textContent;
            })
            .build();
          container.appendChild(items);
        }
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
      .match(MyRegex.email());
    if (validity) {
      this.setErrorMessage("");
      return validity;
    }
    return false;
  }
  addListener(type, callbackFn) {
    this.input.addEventListener(type, (e) => callbackFn(e));
    return this;
  }
  
}
