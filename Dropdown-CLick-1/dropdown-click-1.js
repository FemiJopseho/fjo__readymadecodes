// STEP 1
// Get references to the elements
const html = document.querySelector("html");
const touch = document.getElementById("touch");
const slide = document.querySelector(".slide");
const label = document.querySelector("label[for='touch']");

// STEP 2
// Function to close the dropdown
function closeDropdown() {
	if (touch.checked) {
		// Uncheck the checkbox to close the dropdown
		touch.checked = false;
	}
}

// Add a click event listener to the html element
html.addEventListener("click", function (event) {
	// Check if the clicked element is not the dropdown
	if (event.target !== slide) {
		closeDropdown();
	}
});

// STEP 3
// Add a click event listener to the touch (checkbox) element
touch.addEventListener("click", function (event) {
	// Prevent the click event from propagating to the body element
	event.stopPropagation();
});
