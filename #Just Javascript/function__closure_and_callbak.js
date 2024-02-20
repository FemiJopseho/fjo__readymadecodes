// use of closure & callback

let myInterval = null;
let counter = 0;

function startCounter() {
	function count() {
		counter++;
		console.log(counter);

		if (counter === 7) {
			clearInterval(myInterval);
			myInterval = null;
		}
	}

	if (!myInterval) {
		myInterval = setInterval(count, 1000);
	}
}

startCounter();
