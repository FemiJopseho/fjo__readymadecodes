// Function that outputs number of Uppercase in a string

function howManyUppercase(x) {
	let str = x.toString();
	let strLength = str.length - 1;
	let N = 0;
	let howMany = 0;

	let counter = 0;
	while (counter <= strLength) {
		str[N];
		if (str[N] === str[N].toUpperCase()) {
			howMany += 1;
		}
		N += 1;
		counter += 1;
	}
	return howMany;
}

console.log(howManyUppercase("tWoWW"));
