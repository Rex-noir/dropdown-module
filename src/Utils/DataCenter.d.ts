export default class MyRegex {
    /**
     *
     * @returns get email regex
     */
    static email(): RegExp;
    /**
     *
     * @param {String} countryName country name
     * @returns return the zip code data info about the country
     */
    static zipCode(countryName: string): any;
    /**
     *
     * @returns country names
     */
    static getCountries(): any[];
    /**
     *
     * @returns iso array
     */
    static getISO(): any[];
}
