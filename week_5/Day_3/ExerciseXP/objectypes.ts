type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return { name, age };
}

const newPerson = createPerson("Alice", 25);
console.log(newPerson); 
// Output: { name: 'Alice', age: 25 }
