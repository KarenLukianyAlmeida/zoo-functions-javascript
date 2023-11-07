const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const person = data.employees.find((employee) => employee.id === id);

  const firstSpeciesId = person.responsibleFor[0];
  const foundSpecies = data.species.find((species) => species.id === firstSpeciesId);
  const oldestAnimal = foundSpecies.residents
    .reduce((prev, curr) => (prev.age > curr.age ? prev : curr));

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
