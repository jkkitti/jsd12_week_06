// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full implementation using Encapsulation, Inheritance, and Polymorphism.
/*
const lion = {
  name: "Simba",
  species: "Lion",
  sound: "Roar",
  
  makeSound() {
    console.log(`${this.name} the ${this.species} says ${this.sound}!`);
  }
};

lion.makeSound(); // Output: Simba the Lion says Roar!
*/
// The Class Template (Encapsulation)

class Animal {
  constructor(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
    this._hunger = 100; // Internal state (protected by _)
  }

  makeSound() {
    return `${this.name} the ${this.species} says ${this.sound}!`;
  }

  eat() {
    this._hunger -= 10; //
    return `${this.name} the ${this.species} eats and feels less hungry. Hunger level: ${this._hunger}`;
  }
}

const animal1 = new Animal("Simba", "Lion", "Roar");
const animal2 = new Animal("Dumbo", "Elephant", "Trumpet");
const animal3 = new Animal("Manny", "Mammoth", "Grumble");

console.log(animal1.makeSound());
console.log(animal1.eat());
console.log(animal2.makeSound());
console.log(animal2.eat());
console.log(animal3.makeSound());
console.log(animal3.eat());

// Inheritance and Polymorphism
