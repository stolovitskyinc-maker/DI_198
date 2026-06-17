// 1. Base Class (Parent Class)
class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): string {
        return "Some generic animal sound";
    }
}

// 2. Subclass (Child Class) using Inheritance
class Dog extends Animal {
    // 3. Overriding the base class method
    public override makeSound(): string {
        return "bark";
    }
}

// 4. Testing the functionality
const myDog = new Dog("Buddy");
console.log(myDog.name);         // Output: Buddy (Inherited property)
console.log(myDog.makeSound());  // Output: bark (Overridden method)
