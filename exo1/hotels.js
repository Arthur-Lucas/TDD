const hotel = {
  "hotel1": "aaaaaaaaaaa",
  "hotel2": "bbbbbbbbb",
  "hotel3": "ccccccccccc"
};

const list_hotel = (hotelData = hotel) => {
  const values = Object.values(hotelData);
  if (values.length === 0) {
    return "Aucun hôtel disponible";
  }
  return [...values];
};
console.log(list_hotel());
module.exports = list_hotel;