class Person {
  firstName;
  age;

  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  introduceSelf = () => {
    console.log(
      `Hi! I'm ${this.firstName} and I have ${this.age} years old :-)`
    );
  };
}

const me = new Person("Marcin", 39);
console.table(me);
