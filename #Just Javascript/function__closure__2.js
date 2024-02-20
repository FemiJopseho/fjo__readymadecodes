// demonstrating closure and how it access variables outside its own scope

let myGlobalString = "World";

function outer() {
	let myLexicalString = "Hello";

	function inner() {
		let myLocalString = `${myGlobalString}, ${myLexicalString}!`;
		return myLocalString;
	}

	return inner();
}
console.log(outer());

/* 
*This example describes the three primary scopes visible to closures:

From the point-of-view of the inner() function, everything outside its scope (outer functions, the global environment, etc.) is in the lexical environment, including myLexicalString and myGlobalString.
*/