// ==========================================
// #1 PREDICTION AND ANALYSIS
// ==========================================
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne();
/* 
PREDICTION: 
The alert will display: "inside the funcOne function 3"

EXPLANATION: 
The variable `a` is initialized to 5. The condition (5 > 1) evaluates to true, 
so the code inside the `if` block executes and re-assigns `a` to the value 3. 
Since `let` allows variable re-assignment, the updated value is successfully logged.
*/

// #1.2 What will happen if the variable is declared with const instead of let ?
/* 
PREDICTION: 
A `TypeError: Assignment to constant variable` will be thrown.

EXPLANATION: 
Variables declared with `const` cannot be re-assigned. The engine will crash 
on the line `a = 3;` because it violates this fundamental rule.
*/


// ==========================================
// #2 PREDICTION AND ANALYSIS
// ==========================================
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // First alert
funcTwo();   // Function execution
funcThree(); // Second alert
/* 
PREDICTION: 
- The first alert will display: "inside the funcThree function 0"
- The second alert will display: "inside the funcThree function 5"

EXPLANATION: 
`a` is declared in the global scope with an initial value of 0. 
1. When `funcThree()` runs first, it reads the global variable `a` (0).
2. `funcTwo()` executes and modifies the global variable `a` directly, updating it to 5.
3. When `funcThree()` runs a second time, it reads the updated global variable `a` (5).
*/

// #2.2 What will happen if the variable is declared with const instead of let ?
/* 
PREDICTION: 
The first alert will display "inside the funcThree function 0", but immediately 
after, running `funcTwo()` will trigger a `TypeError: Assignment to constant variable`.

EXPLANATION: 
`funcThree()` successfully reads the initial global `const` value. However, 
`funcTwo()` attempts to re-assign that global constant `a` to 5, which causes a runtime error.
*/


// ==========================================
// #3 PREDICTION AND ANALYSIS
// ==========================================
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive();
/* 
PREDICTION: 
The alert will display: "inside the funcFive function hello"

EXPLANATION: 
`funcFour()` explicitly attaches a property named `a` to the global `window` object. 
In browsers, properties of the `window` object are globally accessible variables. 
Therefore, when `funcFive()` references `a`, it finds "hello" in the global scope.
*/


// ==========================================
// #4 PREDICTION AND ANALYSIS
// ==========================================
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix();
/* 
PREDICTION: 
The alert will display: "inside the funcSix function test"

EXPLANATION: 
This is a classic example of **variable shadowing**. `funcSix` declares a new local variable 
named `a` inside its function scope. This local `a` shadows (hides) the global `a` (1) 
completely within the boundaries of this function. The global variable remains unchanged at 1.
*/

// #4.2 What will happen if the variable is declared with const instead of let ?
/* 
PREDICTION: 
Exactly the same result: "inside the funcSix function test" with no errors.

EXPLANATION: 
Variable shadowing works identically with `const`. The global `a` is a distinct variable 
from the local inner `a`. Since neither variable is actually being re-assigned within 
their respective scopes, both constants coexist peacefully in separate scopes.
*/


// ==========================================
// #5 PREDICTION AND ANALYSIS
// ==========================================
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // First alert
}
alert(`outside of the if block ${a}`); // Second alert

// #5.1 - run the code in the console
/* 
PREDICTION: 
- The first alert will display: "in the if block 5"
- The second alert will display: "outside of the if block 2"

EXPLANATION: 
Variables declared with `let` are **block-scoped**. 
1. Inside the `if` curly braces `{}`, a completely new and distinct block-scoped variable `a` 
   is created and assigned to 5. The first alert reads this local block variable.
2. Once the execution breaks out of the `if` statement block, that block-scoped variable 
   is destroyed. The second alert reads the outer global variable `a`, which is still 2.
*/

// #5.2 What will happen if the variable is declared with const instead of let ?
/* 
PREDICTION: 
Exactly the same results: "in the if block 5" followed by "outside of the if block 2".

EXPLANATION: 
Like `let`, variables declared with `const` are strictly block-scoped. The inner `const a` 
only lives inside the `if` curly braces and shadows the outer `const a` without conflict, 
as no re-assignments take place.
*/
