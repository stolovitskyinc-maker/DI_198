class Employee {
    // 1. Property Declarations with Access Modifiers
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    // 2. Constructor to Initialize Properties
    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    // 3. Public Method interacting with Private Properties
    public getEmployeeInfo(): string {
        return `Employee: ${this.name}, Position: ${this.position}`;
    }
}

// Test the functionality
const emp = new Employee("Alice", 75000, "Developer", "Engineering");
console.log(emp.getEmployeeInfo()); // Output: Employee: Alice, Position: Developer
