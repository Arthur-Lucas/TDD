// Importe le module 'fs' pour travailler avec le système de fichiers de manière asynchrone
const fs = require("fs/promises");

// Définit la fonction 'listHotels'
function listHotels() {
  return new Promise((resolve, reject) => {
    // Lit le fichier 'hotels.json' de manière asynchrone
    fs.readFile("./hotels.json")
      .then((data) => {
        // Si la lecture est réussie
        // Parse les données JSON lues et les résout
        resolve(JSON.parse(data));
      })
      .catch((error) => {
        reject(0); //
      });
  });
}

module.exports = listHotels;
