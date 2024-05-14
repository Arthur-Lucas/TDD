const listBookings = require("./reservation");

test("must list bookings", async () => {
  const result = await listBookings();
  expect(result).toEqual({
    reservation1: "aaaaaaaaaaa",
    reservation2: "bbbbbbbbb",
    reservation3: "ccccccccccc",
  });
});
