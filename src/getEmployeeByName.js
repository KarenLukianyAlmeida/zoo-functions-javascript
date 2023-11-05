const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName !== undefined) {
    return data.employees.find((employee) =>
      employee.firstName === employeeName
      || employee.lastName === employeeName);
  }
  return {};
};

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
