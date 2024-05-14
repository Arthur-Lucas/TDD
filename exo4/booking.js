const fs = require("fs/promises");

// Définit la fonction 'AvailableBook'
function AvailableBook() {
  return new Promise((resolve, reject) => {
    // Lit le fichier 'booking.json' de manière asynchrone
    fs.readFile("./booking.json")
      .then((data) => {
        var JSONParsed = JSON.parse(data);

        // Filtre les hôtels réservés à partir des données JSON

        const bookedHotels = Object.entries(JSONParsed)
          .filter(([hotel, details]) => details[0].book === "true")
          .map(([hotel, details]) => ({
            // Transforme les hôtels réservés en objets avec nom et images
            name: details[0].name,
            pictures: details[0].pictures,
          }));

        bookedHotels.forEach((hotel) => {
          console.log(`Hotel Name: ${hotel.name}`);
          console.log(`Pictures:`);
          Object.values(hotel.pictures).forEach((picture) =>
            console.log(picture)
          );
          console.log("----");
        });

        // Résout la promesse avec les hôtels réservés
        resolve(bookedHotels);
      })
      .catch((error) => {
        reject(0);
      });
  });
}

module.exports = AvailableBook;
