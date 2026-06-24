function describeValue(value: number | string): string {
  // Use the 'typeof' operator as a type guard
  if (typeof value === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}
