const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const person = data.employees.find((employee) => employee.id === id);
  const firstSpeciesId = person.responsibleFor[0];
  const foundSpecies = data.species.find((species) => species.id === firstSpeciesId);
  const oldestAnimal = foundSpecies.residents
    .reduce((prev, curr) => (prev.age > curr.age ? prev : curr));
  const reportOldestAnimal = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];

  return reportOldestAnimal;
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
