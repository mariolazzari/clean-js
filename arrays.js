const { faker } = require("@faker-js/faker/locale/it");

const users = Array(10)
  .fill(undefined)
  .map(() => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const age = faker.datatype.number(100);

    return { firstName, lastName, age };
  });

module.exports = { users };
