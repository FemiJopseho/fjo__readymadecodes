document.addEventListener("DOMContentLoaded", function () {
	const imageContainer = document.querySelector(
		".hero__invest__animate__image-container"
	); // Select the image container
	const imageElements = document.querySelectorAll(
		".hero__invest__animate__image"
	); // Select all image elements

	const intervalTime = 3000; // Interval time in milliseconds
	let currentIndex = 0; // Initialize the index

	function updateImage() {
		imageElements.forEach((image, index) => {
			image.style.opacity = index === currentIndex ? 1 : 0; // Show the current image, hide others
		});

		currentIndex = (currentIndex + 1) % imageElements.length;
	}

	// Initial call to set the initial image
	updateImage();

	// Call the function at regular intervals
	setInterval(updateImage, intervalTime);
});
