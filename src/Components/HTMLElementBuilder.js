/* eslint-disable import/prefer-default-export */
export class HTMLElementBuilder {
  /**
   *
   * @param {string} tag the tag name of the element
   */
  constructor(tag) {
    if (!(tag instanceof HTMLElement)) {
      this.element = document.createElement(tag);
    } else {
      this.element = tag;
    }
  }

  /**
   *
   * @param  {...any} classList the class names to set to the elements
   * @returns   returns this object for method chaining
   */
  setClass(...classList) {
    if (!classList.length) {
      throw new Error(`Class name length ${classList.length} `);
    }
    this.element.classList.add(classList.map((name) =>name.trim()).join(" "));
    return this;
  }

  /**
   *
   * @param {string} id The id you want to set for the element
   * @returns return instance for method chaining
   */
  setId(id) {
    if (!id) throw new Error(`Id length ${id.length}`);
    this.element.id = id;
    return this;
  }

  /**
   *
   * @param {string} text Set text or appendTextNode to the element
   * @returns returns instance of the object for method chaining
   */
  setText(text) {
    this.element.appendChild(document.createTextNode(text));
    return this;
  }

  /**
   *
   * @param {any} name the name of the attribute to set default is 'error'
   * @param {any} value the value of the attribute set, default is 'error'
   * @returns
   */
  setAttribute(name = "error", value = "error") {
    this.element.setAttribute(name, value);
    return this;
  }

  /**
   *
   * @param {string} tag HTML tag as string
   * @param {string} className The classname for the element
   * @param {object} attribute Set attribute directly with object.
   * @param  {...any} content Set text content if passed strings. Append the HTML node if node is passed.
   * @returns returns the newly created element
   * @example createElement("h3","title",{name:value},"Hi") // set the text of the newly created element to "Hi"
   * @example createElement("div","container",{name:value}, document.createElement("h5")) //Append the h5 element to the newly created div
   */
  static createElement(tag, className, attribute = {}, ...content) {
    const element = new HTMLElementBuilder(tag).build();
    const attributes = Object.entries(attribute);

    if (className) element.classList.add(className);
    if (attributes.length > 0) {
      attributes.forEach(([name, value]) => element.setAttribute(name, value));
    }
    if (content) {
      content.forEach((child) => {
        if (typeof child === "string") {
          element.appendChild(document.createTextNode(child));
        } else if (
          child instanceof HTMLElement ||
          child instanceof HTMLElementBuilder
        ) {
          element.appendChild(
            child instanceof HTMLElementBuilder ? child.build() : child
          );
        }
      });
    }
    return element;
  }

  /**
   *
   * @param {HTMLElement} child The element to append
   * @returns reuturns instance
   */
  appendHTML(child) {
    this.element.appendChild(child);
    return this;
  }

  /**
   *
   * @param {EventListenerOptions} event the event type to listen
   * @param {Function} callbackFn the function to callback
   */
  addEvent(event, callbackFn) {
    this.element.addEventListener(event, callbackFn);
    return this;
  }

  setDisabled(boolean) {
    this.element.disabled = boolean;
    return this;
  }

  /**
   *
   * @returns returns the element
   */
  build() {
    return this.element;
  }

  /**
   *
   * @param {string} text text to set
   * @returns returns the newly created paragraph element
   */
  static p(text) {
    return HTMLElementBuilder.createElement("p", false, false, text);
  }

  /**
   *
   * @param {URL} typeURI http url or whatever the a href support
   * @param {string}} text the text content for the element
   * @returns instance
   */
  static a(typeURI, text) {
    return new HTMLElementBuilder("a")
      .setAttribute("href", typeURI)
      .setText(text)
      .build();
  }

  /**
   *
   * @returns returns the element created with this class
   */
  static create(tag) {
    return new HTMLElementBuilder(tag).build();
  }
}
