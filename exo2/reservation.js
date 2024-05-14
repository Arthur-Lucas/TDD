const fs = require("fs/promises");
function listBookings() {
  return new Promise((resolve, reject) => {
    // Lit le fichier 'reservation.json' de manière asynchrone
    fs.readFile("./reservation.json")
      .then((data) => {
        // Si la lecture est réussie
        // Parse les données JSON lues et les résout
        resolve(JSON.parse(data));
      })
      .catch((error) => {
        reject(0);
      });
  });
}

// Exporte la fonction 'listBookings' pour qu'elle puisse être utilisée dans d'autres fichiers
module.exports = listBookings;
