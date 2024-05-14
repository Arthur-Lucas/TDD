const bookings = {
  "hotel1": [
    {
      "name": "aaaaaaaaaaa",
      "pictures": {
        "photo1": "EEEEEEEEEEE.png",
        "photo2": "DDDDDDDDDDD.png"
      },
      "book": "false"
    }
  ],
  "hotel2": [
    {
      "name": "bbbbbbbbbbbbbbb",
      "pictures": {
        "photo1": "FFFFFFFFFFF.png",
        "photo2": "GGGGGGGGGGG.png"
      },
      "book": "false"
    }
  ],
  "hotel3": [
    {
      "name": "cccccccccccccccccccc",
      "pictures": {
        "photo1": "HHHHHHHHHHHH.png",
        "photo2": "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
      },
      "book": "true"
    }
  ],
};




const list_booked_hotels = () => {
  const bookedHotels = Object.entries(bookings)
    .filter(([hotel, details]) => details[0].book === "true")
    .map(([hotel, details]) => ({
      name: details[0].name,
      pictures: details[0].pictures,
    }));

  if (bookedHotels.length === 0) {
    return "Vous n'avez fait aucune réservation";
  }

  return bookedHotels;
};

module.exports = list_booked_hotels;