// *Creating a class(with ONLY properties) and objects from it.

// *NOTE: the class has only properties (key:value) and no methods....
/* to do this, we must use 2 ways: 
    1. define the class properties inside a constructor.
    2. define the class properties inside the class body. */
// so this will only create objects with no method but only properties.
///////////////////////////////////////////////////////////////
// * USING A CONSTRUCTOR

class ClassNameWithConstructor {
	constructor(firstName, lastName) {
		// Properties defined within the constructor
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

// Example usage:
// Create an Object from the class
const objectCreated__1 = new ClassNameWithConstructor("John", "Doe");

// Test the output of the object
console.log(objectCreated__1.firstName); // Output: John
console.log(objectCreated__1.lastName); // Output: Doe

//////////////////////////////////////////////////////////////////////

// * USING THE CLASS BODY
class ClassNameWithinClassBody {
	// Properties defined directly within the class body
	firstName = "";
	lastName = "";
}

// Example usage:
// *create an object from the class
const objectCreated__2 = new ClassNameWithinClassBody();

// assign values to the property keys
objectCreated__2.firstName = "Jane";
objectCreated__2.lastName = "Smith";

// Test the object to see if it contains the properties
console.log(objectCreated__2.firstName); // Output: Jane
console.log(objectCreated__2.lastName); // Output: Smith

//////////////////////////////////////////////////////////////////////

// *Which method should i use? Constructor or Direct Body?
/*
  Use a constructor when you need to perform
  specific initialization logic or when you want explicit
  control over property initialization. 
  
  Use direct initialization within the class body when your 
  properties are simple and don't require additional
  logic during initialization. 
  
  Consider your project's  requirements, coding style,
  and the level of support for ECMAScript features
  in your target environment.
*/
