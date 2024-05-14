const reservation = {
  "reservation1": "aaaaaaaaaaa",
  "reservation2": "bbbbbbbbb",
  "reservation3": "ccccccccccc"
}

const list_reservation = () => {
  return [...Object.values(reservation)]
}

module.exports = list_reservation