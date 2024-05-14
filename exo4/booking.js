const fs = require("fs/promises");
function AvailableBook() {
  //   return 3;
  return new Promise((resolve, reject) => {
    fs.readFile("./booking.json")
      .then((data) => {
        var JSONParsed = JSON.parse(data);

        const bookedHotels = Object.entries(JSONParsed)
          .filter(([hotel, details]) => details[0].book === "true")
          .map(([hotel, details]) => ({
            name: details[0].name,
            pictures: details[0].pictures,
          }));

        bookedHotels.forEach(hotel => {
          console.log(`Hotel Name: ${hotel.name}`);
          console.log(`Pictures:`);
          Object.values(hotel.pictures).forEach(picture => console.log(picture));
          console.log("----");
        });

        resolve(bookedHotels);
      })
      .catch((error) => {
        reject(0);
      });
  });
}

// const bookings = {
//   "hotel1": [
//       {
//           "name": "aaaaaaaaaaa",
//           "pictures": {
//               "photo1": "EEEEEEEEEEE.png",
//               "photo2": "DDDDDDDDDDD.png"
//           },
//           "book": "false"
//       }
//   ],
//   "hotel2": [
//       {
//           "name": "bbbbbbbbbbbbbbb",
//           "pictures": {
//               "photo1": "FFFFFFFFFFF.png",
//               "photo2": "GGGGGGGGGGG.png"
//           },
//           "book": "false"
//       }
//   ],
//   "hotel3": [
//       {
//           "name": "cccccccccccccccccccc",
//           "pictures": {
//               "photo1": "HHHHHHHHHHHH.png",
//               "photo2": "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
//           },
//           "book": "true"
//       }
//   ],
// };

// const list_booked_hotels = () => {
//   const bookedHotels = Object.entries(bookings)
//       .filter(([hotel, details]) => details[0].book === "true")
//       .map(([hotel, details]) => ({
//           name: details[0].name,
//           pictures: details[0].pictures,
//       }));

//   bookedHotels.forEach(hotel => {
//       console.log(`Hotel Name: ${hotel.name}`);
//       console.log(`Pictures:`);
//       Object.values(hotel.pictures).forEach(picture => console.log(picture));
//       console.log("----");
//   });

//   return bookedHotels;
// };

// module.exports = list_booked_hotels

module.exports = AvailableBook;
