let sliderContainer = document.querySelector(".slider-container");
let currentSlide = 0;
let slides = [...document.querySelectorAll(".slide")];

function transitionToNext() {
    let transitionDuration = getComputedStyle(sliderContainer).transitionDuration; // Get transition duration in seconds
    setTimeout(() => {
        currentSlide = (currentSlide + 1) % slides.length; 
        // Transition to the next slide here
    }, parseFloat(transitionDuration) * 1000); // Convert seconds to milliseconds
}

sliderContainer.addEventListener("transitionend", transitionToNext); 