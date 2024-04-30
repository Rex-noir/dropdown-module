import zipCodes from "../assets/zipcodes.json";

export default class MyRegex {
  /**
   *
   * @returns get email regex
   */
  static email() {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  }
  /**
   *
   * @param {String} countryName country name
   * @returns return the zip code data info about the country
   */
  static zipCode(countryName) {
    for (let i = 0; i < zipCodes.length; i += 1) {
      if (zipCodes[i].Country === countryName) {
        return zipCodes[i];
      }
    }
    return false;
  }
  /**
   *
   * @returns country names
   */
  static getCountries() {
    let names = [];
    for (let country of zipCodes) {
      names.push(country.Country);
    }
    return names;
  }
  /**
   *
   * @returns iso array
   */
  static getISO() {
    let iso = [];
    for (let country of zipCodes) {
      iso.push(country.ISO);
    }
    return iso;
  }
}
