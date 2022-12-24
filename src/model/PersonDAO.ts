import { next } from "../services/IdGenerator";
import { IPerson } from "./IPerson";

class PersonDAODefault {
  private persons: IPerson[] = [
    { id: next(), firstname: "Stacey", lastname: "Starfish" },
    { id: next(), firstname: "Alex", lastname: "Ant" },
    { id: next(), firstname: "Sherman", lastname: "Shark" },
    { id: next(), firstname: "Bertha", lastname: "Bear" },
  ];

  create(firstname: string, lastname: string): IPerson {
    const person: IPerson = {
      id: next(),
      firstname: firstname,
      lastname: lastname,
    };
    this.add(person);
    return person;
  }

  add(person: IPerson) {
    this.persons.push(person);
  }

  findAll(): IPerson[] {
    return this.persons;
  }
}

export const PersonDAO = new PersonDAODefault();
