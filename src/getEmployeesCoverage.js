const data = require('../data/zoo_data');

const getSpecies = (speciesInfo) => {
  const speciesName = speciesInfo.map((id) => data.species
    .find((species) => species.id === id).name);

  const speciesLocation = speciesInfo.map((id) => data.species
    .find((species) => species.id === id).location);

  return {
    name: speciesName,
    location: speciesLocation,
  };
};

const setReport = () => data.employees.map((employee) => {
  const speciesInfo = getSpecies(employee.responsibleFor);

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesInfo.name,
    locations: speciesInfo.location,
  };
});

const getEmployeesCoverage = (infoEmployee) => {
  const allEmployees = setReport();

  if (!infoEmployee) {
    return allEmployees;
  }

  if (infoEmployee.name) {
    const correctData = allEmployees.find((employee) => (employee.fullName
      .split(' ')
      .includes(infoEmployee.name)));

    if (correctData) {
      return correctData;
    }
    throw new Error('Informações inválidas');
  }

  const correctData = allEmployees.find((employee) => (employee.id.includes(infoEmployee.id)));

  if (correctData) {
    return correctData;
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
