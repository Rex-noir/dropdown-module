export default class ElementManger {
  constructor(element) {
    this.element = element;
  }

  /**
   *
   * @param {id} id the id to search
   * @returns the element if found
   */
  static byId(id) {
    if (id.startsWith("#")) {
      return document.querySelector(id);
    }
    return document.querySelector(`#${id}`);
  }
  /**
   *
   * @param {HTMLElement} element the name of element you want to search
   * @returns the element
   */
  static byElement(element) {
    return document.querySelector(element);
  }
  static byClass(className) {
    if (className.startsWith(".")) {
      return document.querySelector(className);
    }
    return document.querySelector(`.${className}`);
  }
}
