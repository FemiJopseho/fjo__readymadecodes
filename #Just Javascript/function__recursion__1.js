// This  ode tests recursion

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return (
				find(current + 5, `(${history} + 5)`) ||
				find(current * 3, `(${history} * 3)`)
			);
		}
	}
	return find(1, "1");
}

console.log(findSolution(24));
// time it took = 0.225 seconds
// → (((1 * 3) + 5) * 3)

console.log(findSolution(13));
// time it took = 0.205 seconds
// → ((1 + 5) + 5)

console.log(findSolution(12567));
// time it took = 2.287 seconds
// → (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((1 + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) * 3) + 5) + 5) * 3) + 5) + 5) * 3)

// time it took together = 2.667 seconds
