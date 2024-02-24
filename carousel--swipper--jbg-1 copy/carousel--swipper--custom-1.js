/**
  Swiper: title
  https://swiperjs.com/
**/
const swiper = new Swiper(".swiperCarousel", {
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 15, //space btw each -swiper-slide
	keyboard: {
		enabled: true,
	},
	loop: true,
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
	slide.addEventListener("click", () => {
		const { className } = slide;
		if (className.includes("swiper-slide-next")) {
			swiper.slideNext();
		} else if (className.includes("swiper-slide-prev")) {
			swiper.slidePrev();
		}
	});
}

function resizeTextToFit() {
	const client__quoteEls = document.getElementsByClassName("client__quote");
	for (const el of client__quoteEls) {
		el.style.width = el.offsetWidth;
		el.style.height = el.offsetHeight;
	}
	textFit(client__quoteEls, { maxFontSize: 14 });
}
resizeTextToFit();
addEventListener("resize", (event) => {
	resizeTextToFit();
});
