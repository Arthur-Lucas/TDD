// Mock for MongoDB client
class MockMongoClient {
  constructor() {
    this.data = {
      "hotel1": "aaaaaaaaaaa",
      "hotel2": "bbbbbbbbb",
      "hotel3": "ccccccccccc"
    };
  }

  // Simulating find operation
  async find() {
    return this.data;
  }
}

// Function to mock MongoDB client
const mockMongoClient = () => {
  return new MockMongoClient();
};

// Function to list hotels
const list_hotel = async (mongoClient = mockMongoClient()) => {
  try {
    // Simulating fetching data from MongoDB
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
