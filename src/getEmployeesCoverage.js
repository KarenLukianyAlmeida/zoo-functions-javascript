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

const getEmployeesCoverage = (infoEmployee) => {
  const listOfFirstName = data.employees.map((employee) => employee.firstName);
  const listOfLastName = data.employees.map((employee) => employee.lastName);
  const listOfId = data.employees.map((employee) => employee.id);

  if (listOfFirstName.includes(infoEmployee
    || listOfLastName.includes(infoEmployee)
    || listOfId.includes(infoEmployee))) {
      
  }

  if (!infoEmployee) {
    const allEmployees = data.employees.map((employee) => {
      const speciesInfo = getSpecies(employee.responsibleFor);

      return {
        id: employee.id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        species: speciesInfo.name,
        locations: speciesInfo.location,
      }
    });
    return allEmployees;
  }

  const findEmployeeByName = data.employees
    .find((employee) => (employee.firstName === infoEmployee
      || employee.lastName === infoEmployee));

  const findEmployeeById = data.employees
    .find((employee) => (employee.id === infoEmployee));

  if (!findEmployeeByName || !findEmployeeById) {

  }

  throw new Error('Informações inválidas');
};

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
