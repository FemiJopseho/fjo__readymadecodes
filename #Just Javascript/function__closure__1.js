// this explains CLOSURE in functions
function multiplier(factor) {
	let local = factor;
	return (anotherFunction = (number) => number + factor);
}

let twice = multiplier("1st"); // *step 1
/* same as saying:
let twice = anotherFunction();
multiplier("1st"); */

console.log(twice()); // *step 2
console.log(anotherFunction()); // *step 3
/* this shows that: twice() === anotherFunction() 
since multiplier() returns anotherFunction() */

console.log(twice("3rd-")); // *step4
console.log(anotherFunction("3rd-")); // *step 5
// this shows that: twice("3rd-") === anotherFunction("3rd-")

// CONTROL FLOW explained
// step 1---is executed means multiplier("1st") is executed:
//			this means twice = value of multiplier("1st").
// 			and the value returned by multiplier("1st") is: anotherFunction(),
//			so twice = anotherFunction()
// step 2---is executed as : twice() === anotherFunction().
// step 3---is executed as : anotherFunction().
// step 4---is executed as : twice("3rd-") === anotherFunction("3rd-").
// step 5---is executed as : anotherFunction("3rd-").
