const hotels_db = {
  "hotel1": [
    {
      "name": "aaaaaaaaaaa",
      "pictures": {
        "photo1": "EEEEEEEEEEE.png",
        "photo2": "DDDDDDDDDDD.png"
      }
    }
  ],
  "hotel2": [
    {
      "name": "bbbbbbbbbbbbbbb",
      "pictures": {
        "photo1": "FFFFFFFFFFF.png",
        "photo2": "GGGGGGGGGGG.png"
      }
    }
  ],
  "hotel3": [
    {
      "name": "cccccccccccccccccccc",
      "pictures": {
        "photo1": "HHHHHHHHHHHH.png",
        "photo2": "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
      }
    }
  ],
}



const get_pictures = (name) => {
  const pictures = [];
  for (const hotel in hotels_db) {
      const hotelData = hotels_db[hotel];
      for (const entry of hotelData) {
          if (entry.name === name && entry.pictures) {
              const pics = Object.values(entry.pictures);
              if (pics.length > 0) {
                  pictures.push(...pics);
              }
          }
      }
  }
  if (pictures.length === 0) {
      return "Vous n'avez fait aucune réservation";
  }
  return pictures;
}

module.exports = get_pictures;