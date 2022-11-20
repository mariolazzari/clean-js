const { getDay, getDayObj } = require("./switchObj");
const { users } = require("./arrays");

// switch - obj
const today = new Date().getDay();

console.time("switch");
console.log(getDay(today));
console.timeEnd("switch");

console.time("obj");
console.log(getDayObj(today));
console.timeEnd("obj");

// arrays
const userNames = users.map(user => {
  const { firstName, lastName } = user;
  const fullName = `${firstName} ${lastName}`;

  return {
    ...user,
    fullName,
  };
});

console.log("User names:", userNames);

const userEmails = userNames.map(user => {
  const first = user.firstName.substring(0, 1).toLowerCase();
  const lastName = user.lastName.toLocaleLowerCase();
  const email = `${first}.${lastName}@mail.com`;

  return {
    ...user,
    email,
  };
});

console.log("User emails:", userEmails);
