const people = [
  {
    firstName: "Marcin",
    lastName: "Butora",
    age: "1983",
    city: "Żywiec",
    profession: "Programmer",
  },
  {
    firstName: "Jan",
    lastName: "Kowalski",
    age: "1992",
    city: "Katowice",
    profession: "Teacher",
  },
];

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

// console.log(getPeopleListArray(people));
console.log(getPersonByCity(people, "Katowice"));
console.log(getPersonByProfession(people, "Programmer"));
