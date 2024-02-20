// *Creating a class(with method & properties) and objects from it.

// so this will only create objects with method and properties.
///////////////////////////////////////////////////////////////
// * initialize the class (lets use constructor to define the properties)
class ClassCreated {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	greeting() {
		return `Hi, I am ${this.firstName} ${this.lastName}.`;
	}
}

// *Create an Object from the class ClassCreated
const objectCreated = new ClassCreated("Object", "Created");

// test the objectCreated to see if it works
console.log(objectCreated.firstName); // output: Object
console.log(objectCreated.lastName); // output: Created
console.log(objectCreated.greeting()); // output: Hi, I am Object Created.

///////////////////////////////////////////////////////////////
