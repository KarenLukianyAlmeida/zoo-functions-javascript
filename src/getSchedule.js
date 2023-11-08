const data = require('../data/zoo_data');

const setCompleteSchedule = (weekDays) => {
  const newObject = {};

  weekDays.forEach((day) => {
    if (day === 'Monday') {
      newObject[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
      return newObject;
    }

    const availabilityAnimals = data.species.filter((species) => species.availability
      .includes(day));

    newObject[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: availabilityAnimals.map((animal) => animal.name),
    };

    return newObject;
  });
  return newObject;
};

const getSchedule = (scheduleTarget) => {
  const weekDays = Object.keys(data.hours);
  const animals = data.species.map((animal) => animal.name);

  if (animals.includes(scheduleTarget)) {
    return data.species
      .find((species) => species.name === scheduleTarget)
      .availability;
  }

  if (weekDays.includes(scheduleTarget)) {
    const specificDay = setCompleteSchedule(weekDays);
    const result = {};
    result[scheduleTarget] = specificDay[scheduleTarget];
    return result;
  }

  return setCompleteSchedule(weekDays);
};

console.log(getSchedule('penguins'));

module.exports = getSchedule;
