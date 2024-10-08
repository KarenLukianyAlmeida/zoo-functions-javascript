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
    const price = data.prices[category];
    sum += (categorys[category] * price);
  });

  return Number(sum.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
