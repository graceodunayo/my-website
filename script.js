//script.js
const slideshowImages = document.querySelectorAll(".slideshow-image"); // Fixed: use querySelectorAll
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentImageIndex = 0;

function showImage(index) {
    slideshowImages.forEach((image, i) => {
        image.classList.remove("active");
        if (i === index) {
            image.classList.add("active");
        }
    });
}
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + slideshowImages.length) % slideshowImages.length;
    showImage(currentImageIndex);
}
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    showImage(currentImageIndex);
}
prevButton.addEventListener("click", prevImage);

nextButton.addEventListener("click", nextImage);

showImage(currentImageIndex);
setInterval(nextImage, 3000); // Change image every 3 seconds