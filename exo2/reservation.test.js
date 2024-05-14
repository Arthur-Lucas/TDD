const list_reservation = require('./reservation.js');

describe('list_reservation', () => {
  test('should return the correct values', () => {
    const expectedValues = ["aaaaaaaaaaa", "bbbbbbbbb", "ccccccccccc"];
    const result = list_reservation();
    expect(result).toEqual(expectedValues);
  });
});