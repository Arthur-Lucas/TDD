const listPictures = require("./pictures");

test("must list pictures of the hotel", async () => {
  const hotelName = "hotel1";
  const result = await listPictures(hotelName);
  switch (hotelName) {
    case "hotel1":
      expect(result).toEqual({
        photo1: "EEEEEEEEEEE.png",
        photo2: "DDDDDDDDDDD.png",
      });
      break;
    case "hotel2":
      expect(result).toEqual({
        photo1: "FFFFFFFFFFF.png",
        photo2: "GGGGGGGGGGG.png",
      });
      break;
    case "hotel3":
      expect(result).toEqual({
        photo1: "HHHHHHHHHHHH.png",
        photo2: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png",
      });
      break;
  }
});
