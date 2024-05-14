const fs = require("fs/promises");
function AvailableBook() {
  //   return 3;
  return new Promise((resolve, reject) => {
    fs.readFile("./booking.json")
      .then((data) => {
        var JSONParsed = JSON.parse(data);
        Object.keys(JSONParsed).forEach((element) => {
          JSONParsed[element].forEach((el) => {
            if (el.book == "true") {
              resolve(true);
              // JSONParsed[element]);
            }
          });
        });
      })
      .catch((error) => {
        reject(0);
      });
  });
}

AvailableBook();

module.exports = AvailableBook;
