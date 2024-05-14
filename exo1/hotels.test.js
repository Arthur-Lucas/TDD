const list_hotel = require('./hotels');

describe('list_hotel', () => {
  test('returns the correct values', () => {
    const expectedValues = ["aaaaaaaaaaa", "bbbbbbbbb", "ccccccccccc"];
    const result = list_hotel();
    expect(result).toEqual(expectedValues);
  });

  test('returns an error message when no hotels are available', () => {
    const result = list_hotel({});
    expect(result).toEqual("Aucun hôtel disponible");
  });
});
