const listBookings = require("./reservation");

// Définit un test unitaire qui vérifie si les réservations sont correctement listées

test("must list bookings", async () => {
  // Appelle la fonction 'listBookings' et attend sa résolution
  const result = await listBookings();
  // Vérifie si les réservations listées correspondent aux valeurs attendues
  expect(result).toEqual({
    reservation1: "aaaaaaaaaaa",
    reservation2: "bbbbbbbbb",
    reservation3: "ccccccccccc",
  });
});
