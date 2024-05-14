const fs = require("fs/promises");
function listBookings() {
  //   return 3;
  return new Promise((resolve, reject) => {
    fs.readFile("./reservation.json")
      .then((data) => {
        resolve(JSON.parse(data));
      })
      .catch((error) => {
        reject(0);
      });
  });
}

module.exports = listBookings;
