// inserts images into section based on screen size

function updateImages() {
	const mobileImage = document.querySelector(".image__mobile");
	const tabletPotImage = document.querySelector(".image__tablet-pot");
	const tabletLandImage = document.querySelector(".image__tablet-land");
	const desktopImage = document.querySelector(".image__desktop");

	const screenWidth = window.innerWidth;

	if (screenWidth <= 500) {
		// NOTE: the image source must be relative to the HTML file not the JS file.
		mobileImage.src = "../test--images/image-label__320-x-568.jpg";
	} else if (screenWidth <= 700) {
		tabletPotImage.src =
			// NOTE: the image source must be relative to the HTML file not the JS file.
			"../test--images/image-label__854-x-480.jpg";
	} else if (screenWidth <= 875) {
		// NOTE: the image source must be relative to the HTML file not the JS file.
		tabletLandImage.src = "../test--images/image-label__1366-x-768.jpg";
	} else {
		// NOTE: the image source must be relative to the HTML file not the JS file.
		desktopImage.src = "../test--images/image-label__1920-x-1080.jpg";
	}
}

// Initial update on page load
updateImages();

// Update images on window resize
window.addEventListener("resize", updateImages);
