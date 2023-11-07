const data = require('../data/zoo_data');

const isManager = (id) => {
  const managersIds = data.employees.reduce((acc, curr) => acc.concat(curr.managers), []);

  const managerIdList = Array.from(new Set(managersIds));

  const result = managerIdList.some((managerId) => (managerId === id));
  return result;
};

const getRelatedEmployees = (managerId) => {
  const result = isManager(managerId);

  if (result) {
    const employers = data.employees.filter((employee) => employee.managers.includes(managerId));

    return employers.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
