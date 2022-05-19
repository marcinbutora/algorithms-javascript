const people = [
  {
    firstName: "Marcin",
    lastname: "Butora",
    age: "1983",
    city: "Żywiec",
    profession: "Programmer",
  },
  {
    firstName: "Jan",
    lastname: "Kowalski",
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

console.log(getPeopleList(people));

getPeopleListArray = (list) => {
  const actualYear = new Date().getFullYear();
  return list.map(
    ({ firstName, lastname, age, city }) =>
      `${firstName} ${lastname} has ${
        parseInt(actualYear) - parseInt(age)
      } years old and living in ${city}`
  );
};

console.log(getPeopleListArray(people));
