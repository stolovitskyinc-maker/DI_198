type PersonInfo = {
  name: string;
  age: number;
};

type Job = {
  position: "Manager" | "Developer"; // Literal types make guarding easier
  department: string;
};

// Create the intersection type
type Employee = PersonInfo & Job;

function describeEmployee(employee: Employee): string {
  // Type guard evaluating the specific literal property value
  if (employee.position === "Manager") {
    return `${employee.name} is a Manager in the ${employee.department} department.`;
  } else if (employee.position === "Developer") {
    return `${employee.name} is a Developer building things in ${employee.department}.`;
  }
  
  return `${employee.name} holds a different position.`;
}
