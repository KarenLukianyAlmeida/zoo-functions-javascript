const data = require('../data/zoo_data');

const countAnimals = (animal = {}) => {
  const completeList = data.species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents
      .filter((residente) => (!animal.sex || residente.sex === animal.sex)).length;
    return acc;
  }, {});

  if (!animal.species) {
    return completeList;
  }
  return completeList[animal.species];
};

// console.log(countAnimals());
// console.log(countAnimals({ species: 'penguins' }));
// console.log(countAnimals({ species: 'bears', sex: 'male' }));

module.exports = countAnimals;
