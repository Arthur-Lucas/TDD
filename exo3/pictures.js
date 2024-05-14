const hotels = {
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
  "hotel4": [
    {
      "name": "hotelSansPhotos"
    }
  ]
}



const get_pictures = (name) => {
  const pictures = [];
  for (const hotel in hotels) {
    const hotelData = hotels[hotel];
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