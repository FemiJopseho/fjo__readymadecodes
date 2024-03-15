// this code updates to show me how wide my screen is and how many pixels ratio it is

window.addEventListener("resize", updateText);
updateText();

function updateText() {
	const data = document.querySelector("#data");
	data.textContent =
		"width: ${window.innerWidth}, Ratio: ${window.devicePixelRatio}";
}
