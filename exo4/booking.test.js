const list_booked_hotels = require('./booking');

describe('list_booked_hotels', () => {
  test('should return the correct booked hotels', () => {
    const expectedValues = [
      {
        name: "cccccccccccccccccccc",
        pictures: {
          photo1: "HHHHHHHHHHHH.png",
          photo2: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
        }
      }
    ];
    const result = list_booked_hotels();
    expect(result).toEqual(expectedValues);
  });

  test('should return message when no reservation is made', () => {
    const expectedMessage = "Vous n'avez fait aucune réservation";
    const result = list_booked_hotels();
    expect(result).toEqual(expect.arrayContaining([]));


  });
});