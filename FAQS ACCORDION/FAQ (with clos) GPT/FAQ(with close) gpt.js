// this code helps open and close the FAQ accordion

document.addEventListener("DOMContentLoaded", function () {
	const accordionHeaders = document.querySelectorAll(".accordion-header");

	accordionHeaders.forEach((header) => {
		header.addEventListener("click", function () {
			// Close all accordion items
			accordionHeaders.forEach((item) => {
				if (item !== header) {
					item.nextElementSibling.style.display = "none";
				}
			});

			// Toggle the display of the clicked accordion item
			const content = header.nextElementSibling;
			content.style.display =
				content.style.display === "block" ? "none" : "block";
		});
	});
});
