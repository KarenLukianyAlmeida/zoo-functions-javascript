const data = require('../data/zoo_data');

const setBasicAnimalMap = () => data.species.reduce((acc, species) => {
  if (!acc[species.location]) {
    const speciesList = data.species
      .filter((animal) => animal.location === species.location)
      .map((animal) => animal.name);

    acc[species.location] = speciesList;
  }
  return acc;
}, {});

const setAdvencedConfigurations = (location, options) => {
  const arrayOfObjects = data.species
    .filter((species) => (species.location === location))
    .map((animaĺ) => ({
      [animaĺ.name]: animaĺ.residents
        // .filter((resident) => (options.sex) ? (resident.sex === options.sex) : true)
        .filter((resident) => (!options.sex) || (resident.sex === options.sex))
        .map((resident) => resident.name).sort((a, b) => {
          if (!options.sorted) {
            return 0;
          }
          return a.localeCompare(b, 'pt-BR');
        }),
    }));

  return arrayOfObjects;
};

const getAnimalMap = (options) => {
  const basicAnimalMap = setBasicAnimalMap();

  if (!options || !options.includeNames) {
    return basicAnimalMap;
  }

  const arrayLocations = Object.keys(basicAnimalMap);

  const advancedAnimalMap = arrayLocations.reduce((acc, location) => {
    const result = setAdvencedConfigurations(location, options);

    acc[location] = result;
    return acc;
  }, {});

  return advancedAnimalMap;
};

module.exports = getAnimalMap;
