export default class InputValidator {
    /**
     *
     * @param {HTMLInputElement} input The input element to validate
     */
    constructor(input: HTMLInputElement, string?: string);
    input: HTMLElement;
    /**
     *
     * @returns input value
     */
    getValue(): any;
    /**
     *
     * @returns the processed input element
     */
    getElement(): HTMLElement;
    /**
     *
     * @param {HTMLInputElement} input
     * @returns true | false
     */
    checkInstance(input: HTMLInputElement): boolean;
    /**
     *
     * @param {HTMLInputElement} input set "required" attribute to the input
     */
    setRequired(): this;
    /**
     *
     * @param {Array} suggestions the array of suggestions to suggest
     * You can style the elements by selecting the id, classes of the suggestions elements
     * Default selectors:
     * the whole container as ID : ${input.id}-suggestion-container
     * the list items as class : suggestion-items
     */
    setAutoComplete(suggestions: any[]): this;
    /**
     *
     * @param {String} message the text to display on error
     */
    setErrorMessage(message: string): this;
    /**
     *
     * @returns true|false
     */
    checkEmailValidiy(): boolean;
    /**
     *
     * @param {EventListenerOptions} type How to
     * @param {*} callbackFn
     * @returns
     */
    addListener(type: EventListenerOptions, callbackFn: any): this;
    /**
     *
     * @param {String} country country name
     * @param {String} zipcode zip code
     * @returns exact zipcode if valid else return an array of note and format with index respectively
     */
    checkZipCode(country: string, zipcode: string): string | any[];
    /**
     *
     * @param {HTMLInputElement} input1 first input
     * @param {HTMLInputElement} input2 second input
     * @returns true | false
     */
    passwordConfirm(input1: HTMLInputElement, input2: HTMLInputElement): boolean;
}
