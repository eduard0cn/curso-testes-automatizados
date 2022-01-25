const StringManipulations = require('./atividade1');

class AdressMatcher {
    /**
     * Class for creating adress and manipulating objects
     * @param  {string} adressText  string containing the address
     */
    constructor(adressText) {
        this.adressText = adressText;

        this.stringM = new StringManipulations(adressText);
    }

    /**
    * Searches for the street name in the given address
    * @param  {string} streetName to be found in the address
    * @return street name if found in address string
    */
    findStreetName(streetName) {
        return this.stringM.findFirstMatch(streetName);
    }

    /**
     * Searches for the street number in the given address
     * @param  {string} streetNumber to be found in the address
     * @return street number if found in address string
     */
    findStreetNumber(streetNumber) {
        return this.stringM.findLastMatch(streetNumber);
    }

    /**
     * Searches for the word between street name and street number in the given address
     * @param  {string} word to be found in the address
     * @return The word if found between street name and street number
     */
    findWordBetweenStreetNameAndStreeNumber(streetName, streetNumber) {
        return this.stringM.substringBetweenMatches(streetName, streetNumber);
    }

    /**
     * Searches for both ends string
     * @return Return a string made of the first 2 and the last 2 chars of the original string
     */
    findBothEnds() {
        return this.stringM.both_ends();
    }

    /**
     * Hides the street name for security
     * @param  {string} streetName to be hidden in the address
     * @return the modified address
     */
    hideStreetName(streetName) {
        return this.stringM.fix_start(streetName);
    }
}

module.exports = AdressMatcher;