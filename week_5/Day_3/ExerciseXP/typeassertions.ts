// 1. Get element and 2. Use Type Assertion to cast it to an HTMLInputElement
const usernameInput = document.getElementById("username") as HTMLInputElement;

// 3. Access and manipulate the element's properties
if (usernameInput) {
    usernameInput.value = "JohnDoe";
}
