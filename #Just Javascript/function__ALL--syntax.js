// Different ways to write functions in Javascript & link it to variables

// NOTE:
// assigning functions to variables

// EXAMPLE X1:
// function id declared with name "multiply"
function multiply(x, y) {
	return x * y;
}

// you want to assign the function to teh variable
const variable = multiply(x, y);
console.log(variable(2, 4)); // output: ReferenceError: x is not defined

/*Out is an error b'cos:
 the code thinks you are calling function multiply with parameters x, y
 and then you are also calling the function variable with parameters 2,4
 */
////////////////////////////////////////////
// *CORRECT way to do this:
// step 1: declare the function on its own with its own name
// step 2: assign the function to the variable
// step 3: now you can call the function via the variable

// *EXAMPLE X2:
// step 1: Function Declaration
function multiply(x, y) {
	return x * y;
}

// step 2: Assigning the function to a variable
// Now, variable holds a reference to the multiply function.
const variable = multiply;

// step 3: Calling the function through the variable with arguments
/* You can now call the function through the variable (variable) 
just like you would if you had called the original function (multiply)
This flexibility allows you to use the function reference stored in the variable.
*/
console.log(variable(2, 4)); // Output: 8
////////////////////////////////////////////

// * Direct way to write this would be:
// EXAMPLE X3:
// *assign the function to the variable as a "Named Function Expression":
const variable = function multiply(x, y) {
	return x * y;
};
console.log(variable(2, 4)); // Output: 8

// or
// *assign the function to the variable as an "Anonymous Function Expression":
const variable = function (x, y) {
	return x * y;
};
console.log(variable(2, 4)); // Output: 8
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

// *1 Function Declaration:
function nameOfFunction(parameter) {
	// Function body
}

// EXAMPLE 1:
function nameOfFunction(parameter) {
	console.log("Hello, " + parameter + "!");
}
// call the function
nameOfFunction("World"); //output: Hello, world!

//Example 2:
function nameOfFunction(parameter) {
	return "Hello, " + parameter + "!";
}

// call the function inside console.log
console.log(nameOfFunction("John"));
//////////////////////////////////////////
////////////////////////////////////////
// *2. Function Expression:
const variable = function (parameter) {
	// Function body
};
/* NOTE: This function has no name. 
it is an anonymous function. 
you can only call it via the variable.
*/

// EXAMPLE 1:
const variable = function (parameter) {
	console.log("Hello, " + parameter + "!");
};
// call the function via the variable
variable("Joseph"); // output: Hello, Joseph!

// Example 2:
const variable = function (parameter) {
	return "Hello, " + parameter + "!";
};

// call the function via variable inside console.log
console.log(variable("John"));
////////////////////////////////////////
////////////////////////////////////////
// *3. Arrow Function:
const variable = (parameter) => {
	// Function body
};

/* 
NOTE: 
The arrow functions are written as anonymous.
B'cos they don't have a function name.
They are usually assigned to a variable.
*/

// EXAMPLE 1:
const variable = (parameter) => {
	console.log("Hello, " + parameter + "!");
};
// call the function
variable("John"); // output: Hello, John!

// Example 2:
const variable = (parameter) => {
	return "Hello, " + parameter + "!";
};

// call the function inside console.log
console.log(variable("John"));
///////////////////////////////////////////

// *4. Shorthand Arrow Function with Implicit Return:
const variable = (parameter) => parameter + 1;

/*
NOTE:
No need for {} and return b'cos the function has only 1 statement.
*/

// EXAMPLE 1:
const variable = (parameter) => parameter + 1;
// call the function
console.log(variable(5)); // Output: 6

// Example 2:
const variable = (parameter) => "Hello, " + parameter + "!";

// call the function inside console.log
console.log(variable("John"));
/////////////////////////////////////////
////////////////////////////////////////
// *5. Named Function Expression:
const variable = function nameOfFunction(parameter) {
	// Function body
};

// EXAMPLE 1:
const variable = function nameOfFunction(parameter) {
	console.log("Hello, " + parameter + "!");
};
// call the function
variable("John"); // output: Hello, John!

// Example 2:
const variable = function nameOfFunction(parameter) {
	return "Hello, " + parameter + "!";
};

// call the function inside console.log
console.log(variable("John"));
//////////////////////////////////////////

// *6. Immediately Invoked Function Expression (IIFE):

/* Anything you declare inside the parenthesis() is local.
The variables are local.
The function name itself is local.
This is why you cannot call an IIFE anywhere else in your code with it's function name.
The function name is essentially a label for the function within the IIFE's scope, 
and it does not create a global or external reference to the function.

*best for:
--Recursions
--closures
--instant one time execution functions
*/

// Function declared with name
(function nameOfFunction(parameter) {
	// Function body
})(someValue);

//or

// Function anonymously (if you don't need it anywhere else in your code)
(function (parameter) {
	// Function body
})(someValue);

// EXAMPLE 1 (IIFE anonymously):
(function (parameter) {
	console.log("Hello, " + parameter + "!");
})("John");

// Example 2 (IIFE with name):
(function nameOfFunction(parameter) {
	return "Hello, " + parameter + "!";
})("John");

const result = nameOfFunction;
console.log(result); // Output: ReferenceError: nameOfFunction is not defined

// Error because it is an IIFE
// You cannot declare it, then later assign and later invoke it
// You have to declare, assign, and invoke it at the same time since it is executed immediately

// *Corrected IIFE usage
const result = (function nameOfFunction(parameter) {
	return "Hello, " + parameter + "!";
})("John");

// Output the result
console.log(result);

/* notice how you do not need to enter a parameter cos 
it has already been inputted into the function on declaring it.
*/

/////////////////////////
// *USES OF IIFE
////////////////////////
// * IIFE in RECURSIONS
// EXAMPLE 3: Calculating the factorial of a number using recursion
const result = (function calculateFactorial(number) {
	if (number <= 1) {
		return 1;
	} else {
		return number * calculateFactorial(number - 1);
	}
})(5);

console.log(result); // Output: 120
/*
In summary, using a function name in an IIFE becomes 
important when you need the function to reference itself, 
such as in recursive scenarios or if the function 
body depends on the function name.
*/

// * IIFE in CLOSURES
// EXAMPLE 4: Using the function name to create a closure
const result = (function counter(initialValue) {
	let count = initialValue;

	// Returning a function that increments the count
	return function increment() {
		count++;
		return count;
	};
})(10);

// Output the results of multiple calls
console.log(result()); // Output: 11
console.log(result()); // Output: 12
console.log(result()); // Output: 13

/*
In this example, the IIFE defines a function named counter that 
takes an initial value and returns another function (increment). 

The inner function, increment, is a closure that has access to 
the count variable from the outer function. 

The name counter is used within the IIFE to refer to itself 
when returning the inner function.

This pattern allows you to create a counter that retains its state 
between multiple function calls, demonstrating how the function name
 can be used to create closures and maintain state within the IIFE.
*/

// * IIFE in Instant execution
// EXAMPLE 5: Using the function name to perform a simple operation
const result = (function performOperation(value) {
	// Assuming the operation is doubling the input value
	return value * 2;
})(7);

// Output the result
console.log(result); // Output: 14

/*
This demonstrates a straightforward use of 
the function name within the IIFE without relying on closures or recursion.
*/
/////////////////////////////////////////////////////////

// *7. Function Constructor:
const variable = new Function("parameter", "console.log(parameter)");

/* The Function constructor allows you to create a new function 
by providing a list of parameters and the function body as strings.

The use of the Function constructor with strings can pose security risks.
*/

// EXAMPLE 1:
const variable = new Function(
	"parameter",
	'console.log("Hello, " + parameter + "!")'
);
// call the function through the variable
variable("John");

// Example 2:
const variable = new Function(
	"parameter",
	'return "Hello, " + parameter + "!"'
);

// call the function inside console.log
console.log(variable("John"));
/////////////////////////////////////////
