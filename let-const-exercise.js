// let & const exercise 

// ES2015 Global Constant 
var PI = 3.14; 
PI = 42; // stop me from doing this! 

const PI = 3.14; 
PI; // Error

// Quiz 

// What is the difference between var and let?
// - var allows to redeclare and reassign variables, but let does not allow to redeclare (reassign OK). Let creates a block-scope. 

// What is the difference between var and const? 
// - var allows to redeclare and reassign variables, but const does not allow to redeclare nor reassign variable. Const creates a block scope. 

// What is hoisting? 
// - Hoisting is when variables are "hoisted" to the top of the scope. With var we can access name of variable. 
// - Function declarations are hoisted 
