
class MockMongoClient {
  constructor() {
    this.data = {
      "hotel1": "aaaaaaaaaaa",
      "hotel2": "bbbbbbbbb",
      "hotel3": "ccccccccccc"
    };
  }


  async find() {
    return this.data;
  }
}

const mockMongoClient = () => {
  return new MockMongoClient();
};

const list_hotel = async (mongoClient = mockMongoClient()) => {
  try {
    const hotelData = await mongoClient.find();

    const values = Object.values(hotelData);
    if (values.length === 0) {
      return "Aucun hôtel disponible";
    }
    return [...values];
  } catch (error) {
    console.error("Error fetching hotel data:", error);
    return "Erreur lors de la récupération des hôtels";
  }
};

module.exports = { list_hotel, mockMongoClient };
