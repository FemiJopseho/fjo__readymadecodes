// function to find uppercase in text and also find character in the text

function howManyUppercase(x, y) {
	let str = x.toString();
	let strLength = str.length - 1;
	let N = 0;
	let howManyUppercase = 0;
	let howManyY = 0;

	let counter = 0;
	while (counter <= strLength) {
		str[N];
		if (str[N] === y) {
			howManyY += 1;
		}
		if (str[N] === str[N].toUpperCase()) {
			howManyUppercase += 1;
		}
		N += 1;
		counter += 1;
	}
	return console.log(`${howManyUppercase} uppercase characters
	${howManyY} ${y}`);
}

howManyUppercase("tWoOW", "W");

howManyUppercase(
	prompt("Enter a Text"),
	prompt("Enter what you want to find in the text")
);

// i can make the prompt emphasise text.
// i can make the prompt emphasise that something must in the input
