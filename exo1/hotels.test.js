const { list_hotel, mockMongoClient } = require('./hotels');

describe('list_hotel', () => {
  test('returns the correct values', async () => {
    const expectedValues = ["aaaaaaaaaaa", "bbbbbbbbb", "ccccccccccc"];

    const mockClient = mockMongoClient();
    const result = await list_hotel(mockClient);
    
    expect(result).toEqual(expectedValues);
  });

  test('returns an error message when no hotels are available', async () => {
    const mockClient = mockMongoClient();
    mockClient.data = {};

    const result = await list_hotel(mockClient);
    expect(result).toEqual("Aucun hôtel disponible");
  });

  test('handles error when fetching hotels', async () => {
    const mockClient = {
      async find() {
        throw new Error("MongoDB connection error");
      }
    };
    const result = await list_hotel(mockClient);
    expect(result).toEqual("Erreur lors de la récupération des hôtels");
  });
});
