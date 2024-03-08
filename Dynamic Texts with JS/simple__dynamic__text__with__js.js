// this contains the javascripts used to dynamically change the text in the html

document.addEventListener("DOMContentLoaded", function () {
	const textElement = document.querySelector(".hero__invest__animate__text"); // Select the text element
	const colorVariables = ["black", "red", "yellow", (color = "0000ff")];

	let currentIndex = 0; // Initialize the index

	function updateTextAndColor() {
		const textArray = [
			"Protect your Funds",
			"Save for a rainy day",
			"Invest into your future",
			"Save towards a project",
			"Invest in a safe way",
		];
		textElement.textContent = textArray[currentIndex];
		textElement.style.color = `var(${colorVariables[currentIndex]})`; // Use backticks for string interpolation

		currentIndex = (currentIndex + 1) % textArray.length;
	}

	// Initial call to set the text and color
	updateTextAndColor();
	// Call the function at regular intervals (every 3 seconds)
	setInterval(updateTextAndColor, 3000);
});
