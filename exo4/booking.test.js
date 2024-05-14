const AvailableBook = require("./booking");

test(
  "must be bookable",
  async () => {
    const result = await AvailableBook();
    expect(result).toBeTruthy();
  },
  { timeout: 20000 }
);
