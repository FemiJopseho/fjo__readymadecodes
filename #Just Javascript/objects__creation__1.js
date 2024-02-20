// *creating an object in Javascript using Object Literals

/* this method of creating Objects is best when
 you need just 1 instance of the object */
/////////////////////////////////////////////////////////////////

// Initialize objectGimli object
const objectGimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "axe",
	greet: function () {
		return `Hi, my name is ${this.name}!`;
	},
};

console.log(objectGimli);
// Output: {name: "Gimli", race: "dwarf", weapon: "axe", greet: ƒ}

console.log(objectGimli.greet());
// Output: Hi, my name is Gimli!

//////////////////////////////
// *seeing the importance of using "this.name" instead of "objectGimli.name"

// Let's create another object and we call this "objectAragorn"
/* We want to use the greet method of objectGimli in the "objectAragorn" 
but we want it to refer to "objectAragorn.greet()" and not "objectGimli.greet()".
*/

const objectAragorn = {
	name: "Aragorn",
	race: "human",
	weapon: "sword",
	greet: objectGimli.greet,
	/* "this.name" makes "objectGimli.greet" usable in any object(instance) 
			regardless of the object name */
};

console.log(objectAragorn.greet());
// Output: Hi, my name is Aragorn!
