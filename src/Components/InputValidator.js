/* eslint-disable no-param-reassign */

import { Logger } from "../Utils/Logger";
import ElementManger from "./ELementManager";
import { HTMLElementBuilder } from "./HTMLElementBuilder";

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
    } else {
      Logger.inputTypeError();
    }
  }
  /**
   *
   * @param {HTMLInputElement} input input element to set autocomplete
   * @param {Array} suggestions the arrays of suggestions to suggest
   * You can style the elements by selecting the id, classes of the suggestions elements
   * Default selectors:
   * the whole container as ID : ${input.id}-suggestion-container
   * the list items as class : suggestion-items
   */
  static setAutoComplete(input, suggestions) {
    if (this.checkInstance(input)) {
      input.autocomplete = "on";
      if (Array.isArray(suggestions)) {
        input.addEventListener("input", (e) => {
          const removeDiv = ElementManger.byId(
            `${input.id}-suggestion-container`
          );
          if (removeDiv) removeDiv.parentNode.removeChild(removeDiv);
          let relevant = suggestions.filter((sugg) =>
            sugg.toLowerCase().startsWith(input.value.toLowerCase())
          );
          const container = new HTMLElementBuilder("div")
            .setId(`${input.id}-suggestion-container`)
            .build();
          for (let suggestion of relevant) {
            const items = new HTMLElementBuilder("div")
              .setClass("suggestion-items")
              .setText(suggestion)
              .addEvent("click", (e) => {
                input.value = items.textContent;
              })
              .build();
            container.appendChild(items);
          }
          input.parentNode.appendChild(container);
        });
      }
    }
  }
  /**
   *
   * @param {HTMLInputElement} input the input to validate
   * @param {String} message the text to display on error
   */
  static setErrorMessage(input, message) {
    input.setCustomValidity(message);
  }
  /**
   *
   * @param {HTMLInputElement} input the input to validate
   * @returns true|false
   */
  static validateEmail(input) {
    return !!String(input.value)
      .toLowerCase()
      .match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      );
  }
}
