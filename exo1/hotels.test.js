// Importe la fonction 'listHotels' depuis le fichier './hotels'
const listHotels = require("./hotels");

// Définit un test unitaire qui vérifie si au moins un hôtel est listé
test("must list 1 hotel or more", async () => {
  // Appelle la fonction 'listHotels' et attend sa résolution
  const result = await listHotels();
  // Vérifie si au moins un hôtel est listé en comparant le résultat avec des valeurs attendues
  expect(result).toEqual({
    hotel1: "aaaaaaaaaaa",
    hotel2: "bbbbbbbbb",
    hotel3: "ccccccccccc",
  });
});
