let carousel = document.querySelector(".insta__caroulsel");
let imageNum = 1;

function setNewImage() {
	imageNum++;
	if (imageNum > 4) {
		imageNum = 1;
	}
	carousel.style.background = `url(./img/carousel-${imageNum}.png) no-repeat`;
}

setInterval(setNewImage, 3500);
