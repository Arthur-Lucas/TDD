const AvailableBook = require("./booking");

describe('list_booked_hotels', () => {
  test('should return the correct booked hotels', async () => {
    const expectedValues = [
      {
        name: "cccccccccccccccccccc",
        pictures: {
          photo1: "HHHHHHHHHHHH.png",
          photo2: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
        }
      }
    ];
    const result = await AvailableBook();
    expect(result).toEqual(expectedValues);
  });
});
