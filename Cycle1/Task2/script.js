let currentIndex = 0;
let slideInterval;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
   slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
   });
   currentIndex = index;
}

function nextSlide() {
   showSlide((currentIndex + 1) % slides.length);
}

function prevSlide() {
   showSlide((currentIndex - 1 + slides.length) % slides.length);
}

function currentSlide(index) {
   showSlide(index);
}

function startSlideShow() {
   slideInterval = setInterval(nextSlide, 3000);
}

function pauseSlideShow() {
   clearInterval(slideInterval);
}

// Start the slideshow on page load
startSlideShow();

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
   dot.addEventListener("click", () => showSlide(index));
});

// Pause the slideshow when hovering over the slider
document
   .querySelector(".slider")
   .addEventListener("mouseenter", pauseSlideShow);
document
   .querySelector(".slider")
   .addEventListener("mouseleave", startSlideShow);

// Show the initial slide
showSlide(currentIndex);
