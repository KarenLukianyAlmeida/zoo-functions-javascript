const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const childs = entrants.filter((entrant) => entrant.age < 18).length;
  const adults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniors = entrants.filter((entrant) => entrant.age >= 50).length;

  return {
    child: childs,
    adult: adults,
    senior: seniors,
  };
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const categorys = countEntrants(entrants);
  const categorysOfEntarnts = Object.keys(categorys);
  let sum = 0;

  categorysOfEntarnts.forEach((category) => {
    if (category === 'child') {
      sum +=  (categorys[category] * 20.99).toFixed(2);
    } else if (category === 'adult') {
      sum += (categorys[category] * 49.99).toFixed(2);
    } 
    sum += (categorys[category] * 24.99).toFixed(2);

    return sum;
  })

};

const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
