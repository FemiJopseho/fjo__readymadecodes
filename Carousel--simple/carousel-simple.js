// Wait for the document to be ready before executing the code
$(document).ready(function () {
	// Move the last 2 slides to the beginning by adjusting their order property
	$(".slide").each(function (i) {
		if ($(this).is(":last-of-type")) {
			$(this).css("order", -1);
		} else if ($(this).is(":nth-last-of-type(2)")) {
			$(this).css("order", -2);
		} else {
			$(this).css("order", i);
		}
	});

	// Variable to track whether the carousel is currently being animated
	var carouselAnimating = false;

	// Handle click events on carousel navigation buttons (next/prev)
	$(".carousel-nav button").click(function (e) {
		e.preventDefault();
		// Determine the direction based on the button clicked
		var dir = $(this).hasClass("next") ? "next" : "prev";
		// Ensure that carousel animation is not already in progress
		if (carouselAnimating === false) {
			carouselAnimating = true;
			// Move the slides in the specified direction
			moveSlides(dir);
			// Reset slides for infinite display after a delay
			slidesReset(dir);
		}
	});

	// Move all slides left or right by one slide
	function moveSlides(dir) {
		// Set default direction to "next" if not provided
		var dir = typeof dir !== "undefined" ? dir : "next";
		// Get the current margin-left value of the carousel
		var currentLeft = parseFloat($(".carousel").css("margin-left"));
		// Get the width of a single slide (including margin)
		var slideWidth = $(".slide").outerWidth(true);
		// Adjust slideWidth based on the direction of movement
		slideWidth = dir === "next" ? slideWidth * -1 : slideWidth;
		// Remove the 'noanimate' class to allow animation
		$(".carousel").removeClass("noanimate");
		// Update the margin-left to move the slides
		$(".carousel").css("margin-left", currentLeft + slideWidth + "px");
	}

	// Reset slides for infinite display after a delay
	function slidesReset(dir) {
		// Set default direction to "next" if not provided
		var dir = typeof dir !== "undefined" ? dir : "next";
		// Delay the execution to wait for the animation to complete
		setTimeout(function () {
			// Disable animation to avoid visual glitches during order change
			$(".carousel").addClass("noanimate");
			var slides = $(".slide");
			// Adjust the order property of each slide based on the direction
			if (dir === "next") {
				$(slides).each(function () {
					if (-2 === parseInt($(this).css("order"))) {
						$(this).css("order", slides.length - 3);
					} else {
						$(this).css("order", parseInt($(this).css("order")) - 1);
					}
				});
			} else {
				$(slides).each(function () {
					if (slides.length === parseInt($(this).css("order")) + 3) {
						$(this).css("order", -2);
					} else {
						$(this).css("order", parseInt($(this).css("order")) + 1);
					}
				});
			}
			// Remove inline styles to reset the margin-left
			$(".carousel").removeAttr("style");
			// Reset the flag to allow the next animation
			carouselAnimating = false;
		}, 600); // Adjust the delay as needed
	}
});
