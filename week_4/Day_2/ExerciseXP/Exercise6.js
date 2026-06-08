[2] === [2] ➡️ False
{} === {} ➡️ False

// ===========================================================

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

// object2.number will be 4
// object3.number will be 4
// object4.number will be 5

// ================================================================

// 1. Create the base Animal class
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// 2. Create the Mammal class that extends Animal
class Mammal extends Animal {
    constructor(name, type, color) {
        // Call the parent class constructor using super
        super(name, type, color);
    }

    // Define the sound method
    sound(animalSound) {
        return `${animalSound}! I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

// 3. Instantiate the farmerCow object
const farmerCow = new Mammal("Lily", "cow", "brown and white");

// 4. Call the sound method and log the output
console.log(farmerCow.sound("Moooo"));


// Moooo! I'm a cow, named Lily and I'm brown and white