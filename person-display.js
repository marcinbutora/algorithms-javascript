import { people } from "./person-data";

const personContainerElement = document.querySelector(".person-container");
const personFirstnameElement = document.querySelector(".person-firstname");
const personLastnameElement = document.querySelector(".person-lastname");

people.forEach((person) => {
  personFirstnameElement.innerHTML = person.firstName;
  personLastnameElement.innerHTML = person.lastName;
  personContainerElement.appendChild(personFirstnameElement);
  personContainerElement.appendChild(personLastnameElement);
});
