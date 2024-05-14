const fs = require("fs/promises");

function listPictures(hotelName) {
  return new Promise((resolve, reject) => {
    // Lit le fichier 'pictures.json' de manière asynchrone
    fs.readFile("./pictures.json")
      .then((data) => {
        var ParsedJSON = JSON.parse(data);

        // Récupère les images de l'hôtel spécifié à partir des données JSON
        resolve(ParsedJSON[hotelName][0].pictures);
      })
      .catch((error) => {
        reject(0);
      });
  });
}

// Exporte la fonction 'listPictures' pour qu'elle puisse être utilisée dans d'autres fichiers
module.exports = listPictures;
