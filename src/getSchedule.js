const data = require('../data/zoo_data');

const setCompleteSchedule = (weekDays) => {
  const newObject = {};

  weekDays.forEach((day) => {
    if (day === 'Monday') {
      return newObject[day] = {
        officeHour: `CLOSED`,
        exhibition: 'The zoo will be closed!',
      };
    }

    const availabilityAnimals = data.species.filter((species) => species.availability.includes(day));
    return newObject[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: availabilityAnimals.map((animal) => animal.name),
    };
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
    let result = {};
    result[scheduleTarget] = specificDay[scheduleTarget];
    return result;
  }

  if (!scheduleTarget || !weekDays.includes(scheduleTarget) || !animals.includes(scheduleTarget)) {
    return setCompleteSchedule(weekDays);
  }
};

console.log(getSchedule('Monday'));

module.exports = getSchedule;
