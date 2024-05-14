const AvailableBook = require("./booking");

describe("list_booked_hotels", () => {
  test("should return the correct booked hotels", async () => {
    // Définit les valeurs attendues des hôtels réservés
    const expectedValues = [
      {
        name: "cccccccccccccccccccc",
        pictures: {
          photo1: "HHHHHHHHHHHH.png",
          photo2: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png",
        },
      },
    ];
    // Appelle la fonction 'AvailableBook' et attend sa résolution
    const result = await AvailableBook();
    // Vérifie si le résultat retourné par la fonction correspond aux valeurs attendues
    expect(result).toEqual(expectedValues);
  });
});
