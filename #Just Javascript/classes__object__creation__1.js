// *Creating a class(with only methods and no properties) and objects from it.

// NOTE: the class here only has a method and no properties (key:value).
// so this will only create objects with no property but only methods.

// Initialize class
class ClassName {
  classNameMethod(firstName, lastName) {
    return `Hi, I am ${firstName} ${lastName}.`;
  }
}

console.log(ClassName); // Output: [class ClassName]
console.log(typeof ClassName); // Output: function

//////////////////////////////////////////////////////////
// *Creating an object from the class called "ClassName"

// Simply creating an instance of the ClassName class
// because "the instance of a class is an object"
const object1 = new ClassName();

// Test if it works by calling the classNameMethod on the created instance (object)
console.log(object1.classNameMethod("Joseph", "Doe"));
// Output: Hi, I am Joseph Doe.

////////////////////////////////////////////////////////////////
// *Creating multiple objects from the class called "ClassName"

// Simply create multiple instances of ClassName
const object2 = new ClassName();
const object3 = new ClassName();
const object4 = new ClassName();

// Testing if the objects work
console.log(object2.classNameMethod("Joseph", "2"));
// Output: Hi, I am Joseph 2.
console.log(object3.classNameMethod("Joseph", "3"));
// Output: Hi, I am Joseph 3.
console.log(object4.classNameMethod("Joseph", "4"));
// Output: Hi, I am Joseph 4.
