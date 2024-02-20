// *creating an object in Javascript using Object constructor

/* an object constructor is basically a function that
 initialize properties & methods of an object */

/* this method of creating Objects is best when
 you need multiple instances of the object */
/////////////////////////////////////////////////////////////////

// *Initialize object using Object constructor

function multipleObjConstruct(anyName, race, weapon) {
	// Using "this" to assign properties to the specific instance
	this.name = anyName;
	this.race = race;
	this.weapon = weapon;

	// You can also define methods within the constructor using "this"
	this.greet = function () {
		return `Hi, my name is ${this.name}!`;
	};
}

// *Creating an instance of Object Constructor called "multipleObjConstruct".
// the instance is called "objectGimli".
const objectGimli = new multipleObjConstruct("GimliXYZ", "dwarf", "axe");

// Accessing properties and calling the greet method
console.log(objectGimli.name);
// Output: GimliXYZ
console.log(objectGimli.greet());
// Output: Hi, my name is GimliXYZ!
console.log(objectGimli);
/* Output: 
	multipleObjConstruct {
  name: 'GimliXYZ',
  race: 'dwarf',
  weapon: 'axe',
  greet: [Function (anonymous)]
}
*/
