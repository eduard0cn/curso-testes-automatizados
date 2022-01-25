const AdressMatcher = require('./Atividade1ClassConsumer');

describe("String Manipulations class mock", () => {

    const STREET = 'Rua Marcelo Loyal Castro 770 Loyal';
    let adress = '';
    let streetName = '';
    let streetNumber = '';
    let aux = '';
    let aux2 = '';
    let start = '';

    beforeAll(() => {
        adress = new AdressMatcher(STREET);
  });

    it('Must return index of the first substring that matches the given string', () => {
        streetName = adress.findStreetName('Rua');
        expect(streetName).toBe(0);

        streetName = adress.findStreetName('Marcelo');
        expect(streetName).toBe(4);

        streetName = adress.findStreetName('Loyal');
        expect(streetName).toBe(12);

        streetName = adress.findStreetName('Castro');
        expect(streetName).toBe(18);

        streetName = adress.findStreetName('770');
        expect(streetName).toBe(25);
    });

    it('Must returns index of the last substring that matches the given string', () => {
        streetNumber = adress.findStreetNumber('Loyal');
        expect(streetNumber).toBe(29);
    });

    it('Must returns the aux between two given other strings', () => {
        aux = adress.findWordBetweenStreetNameAndStreeNumber('Marcelo ', ' Castro');
        expect(aux).toBe('Loyal');

        aux = adress.findWordBetweenStreetNameAndStreeNumber('Loyal ', ' 770');
        expect(aux).toBe('Castro');

        aux = adress.findWordBetweenStreetNameAndStreeNumber('Rua ', ' Marcelo');
        expect(aux).toBeNull();
    });

    it('Must return string made of the first 2 and the last 2 chars of the original adress', () => {
        aux2 = adress.findBothEnds();
        expect(aux2).toBe('Rual');
    });

    it('Must return a string where all occurences of its first char have been changed to *', () => {
        adress = new AdressMatcher('babble');
        start = adress.hideStreetName('b');
        expect(start).toBe('ba**le');
    });

});