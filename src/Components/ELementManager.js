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
}
