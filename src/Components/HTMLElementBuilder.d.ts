export class HTMLElementBuilder {
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
    static createElement(tag: string, className: string, attribute?: object, ...content: any[]): HTMLElement;
    /**
     *
     * @param {string} text text to set
     * @returns returns the newly created paragraph element
     */
    static p(text: string): HTMLElement;
    /**
     *
     * @param {URL} typeURI http url or whatever the a href support
     * @param {string}} text the text content for the element
     * @returns instance
     */
    static a(typeURI: URL, text: any): HTMLElement;
    /**
     *
     * @returns returns the element created with this class
     */
    static create(tag: any): HTMLElement;
    /**
     *
     * @param {string} tag the tag name of the element
     */
    constructor(tag: string);
    element: HTMLElement;
    /**
     *
     * @param  {...any} classList the class names to set to the elements
     * @returns   returns this object for method chaining
     */
    setClass(...classList: any[]): this;
    /**
     *
     * @param {string} id The id you want to set for the element
     * @returns return instance for method chaining
     */
    setId(id: string): this;
    /**
     *
     * @param {string} text Set text or appendTextNode to the element
     * @returns returns instance of the object for method chaining
     */
    setText(text: string): this;
    /**
     *
     * @param {any} name the name of the attribute to set default is 'error'
     * @param {any} value the value of the attribute set, default is 'error'
     * @returns
     */
    setAttribute(name?: any, value?: any): this;
    /**
     *
     * @param {HTMLElement} child The element to append
     * @returns reuturns instance
     */
    appendHTML(child: HTMLElement): this;
    /**
     *
     * @param {EventListenerOptions} event the event type to listen
     * @param {Function} callbackFn the function to callback
     */
    addEvent(event: EventListenerOptions, callbackFn: Function): this;
    setDisabled(boolean: any): this;
    /**
     *
     * @returns returns the element
     */
    build(): HTMLElement;
}
