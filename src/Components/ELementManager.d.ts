export default class ElementManger {
    /**
     *
     * @param {id} id the id to search
     * @returns the element if found
     */
    static byId(id: any): any;
    /**
     *
     * @param {HTMLElement} element the name of element you want to search
     * @returns the element
     */
    static byElement(element: HTMLElement): HTMLElement | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | HTMLAnchorElement | HTMLScriptElement | HTMLEmbedElement | HTMLFormElement | HTMLHeadElement | HTMLAreaElement | HTMLObjectElement | HTMLMapElement | HTMLInputElement | HTMLBaseElement | HTMLTimeElement | HTMLDataElement | HTMLProgressElement | HTMLTrackElement | HTMLSourceElement | HTMLButtonElement | HTMLLinkElement | HTMLAudioElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLFieldSetElement | HTMLHeadingElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLSelectElement | HTMLSlotElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTitleElement | HTMLTableRowElement | HTMLUListElement;
    static byClass(className: any): any;
    constructor(element: any);
    element: any;
    /**
     *
     * @param {HTMLElement} element element to add listener
     * @param {EventListenerOptions} type Event type
     * @param {Function} callBackFunctin  function to callback
     */
    addEventListener(element: HTMLElement, type: EventListenerOptions, callBackFunctin: Function): void;
}
