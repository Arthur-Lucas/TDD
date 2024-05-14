const fs = require("fs/promises");

function listPictures(hotelName) {
  return new Promise((resolve, reject) => {
    fs.readFile("./pictures.json")
      .then((data) => {
        var ParsedJSON = JSON.parse(data);

        resolve(ParsedJSON[hotelName][0].pictures);
      })
      .catch((error) => {
        reject(0);
      });
  });
}

module.exports = listPictures;
