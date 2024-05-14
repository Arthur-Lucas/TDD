const get_pictures = require('./pictures.js');

describe('get_pictures', () => {
  test('should return the correct values for existing photos', () => {
    const expectedValues = ["EEEEEEEEEEE.png", "DDDDDDDDDDD.png"];
    const result = get_pictures('aaaaaaaaaaa');
    expect(result).toEqual(expectedValues);
  });

  test('should return an error message if no photos are available', () => {
    const expectedMessage = "Vous n'avez fait aucune réservation";
    const result = get_pictures('nonExistentHotel');
    expect(result).toEqual(expectedMessage);
  });
});
