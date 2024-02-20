// to find if a number is even or odd
// here is how we define an even & odd numbers:
// 		Zero is even.
//		One is odd.
//		For any other number N, its evenness is the same as N - 2.

// this means if a number is even, when you minus 2 from it multiple times, it will arrive at 0

// Now let us use RECURSION (rather than modulo %).
//	Step 1: set the recursion formula (that is N-2).
//	Step 2: set the points of arrival of the recursion
//			arrival=== possible destinations of the continous loop of the function
//						(that is N == 0 or N == 1)

function isEven(N) {
	if (N == 0) return true; // the arrival-1
	else if (N == 1) return false; // the arrival-2
	else if (N < 0) return isEven(-N);
	else return isEven(N - 2); // the point of recursion
}

console.log(isEven(50));
// → true
console.log(isEven(750));
// → false
console.log(isEven(-1));
// → false
