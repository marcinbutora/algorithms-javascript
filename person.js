const people = require("./person-data");

getPeopleList = (list) => {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(list[i]);
  }
  return newList;
};

getPeopleListArray = (list) => {
  const actualYear = new Date().getFullYear();
  return list.map(
    ({ firstName, lastName, age, city }) =>
      `${firstName} ${lastName} has ${
        parseInt(actualYear) - parseInt(age)
      } years old and living in ${city}`
  );
};

getPersonByCity = (list, city) => list.filter((person) => person.city == city);
getPersonByProfession = (list, profession) =>
  list.filter((person) => person.profession == profession);

console.table(getPeopleListArray(people));
console.table(getPersonByCity(people, "Katowice"));
console.table(getPersonByProfession(people, "Programmer"));
console.table(people);
